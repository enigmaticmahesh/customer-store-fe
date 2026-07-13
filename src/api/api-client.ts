import { APP_ENV_CONFIG } from "@/configs/env.config";
import { useTokensStore } from "@/stores/app-tokens.store";
import ky from "ky";
import type { ApiResponse } from "./api.interface";
import type { AuthTokens } from "@/interfaces/app-auth.interface";

/*
    NOTE:
    This is to restrict mutliple token refresh calls when multiple parallel api calls fails due to access token expiry
*/
const handleNewTokensFetch = () => {
  let activePromise: Promise<ApiResponse<AuthTokens>> | null = null;

  const fetchNewTokens = async (
    oldRefreshToken: string,
  ): Promise<ApiResponse<AuthTokens>> => {
    if (activePromise) return activePromise;
    const url = `${APP_ENV_CONFIG.API_BASE_URL}auth/get-tokens`;
    activePromise = ky
      .post(url, { json: { refreshToken: oldRefreshToken } })
      .json<ApiResponse<AuthTokens>>();
    const tokens = await activePromise;
    return tokens;
  };

  const resetActiveFetchings = () => {
    activePromise = null;
  };

  return { fetchNewTokens, resetActiveFetchings };
};

const { fetchNewTokens, resetActiveFetchings } = handleNewTokensFetch();

export const api = ky.create({
  baseUrl: APP_ENV_CONFIG.API_BASE_URL,

  timeout: 10000,

  retry: {
    limit: 3,
  },

  hooks: {
    beforeRequest: [
      ({ request }) => {
        // const token = localStorage.getItem('token');
        const token = useTokensStore.getState().accessToken;

        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
    afterResponse: [
      // retry with a fresh token on a 401 error
      async ({ request, response, retryCount, options }) => {
        // We do not want to refresh token when login and register fails
        if (options.context?.skipTokenRefresh) {
            return response;
        }
        // Only refresh on first 401, not on subsequent retries
        if (response.status === 401 && retryCount === 0) {
          try {
            const oldRefreshToken = useTokensStore.getState().refreshToken;

            // we do not need to try/catch as if error happens it will throw to the old request which returned 401
            const tokenData = await fetchNewTokens(oldRefreshToken); //.finally(() => resetActiveFetchings())

            // update the token store with new tokens
            const accessToken = tokenData.data?.accessToken || "";
            const refreshToken = tokenData.data?.refreshToken || "";
            useTokensStore
              .getState()
              .updateStore({ accessToken, refreshToken });

            const headers = new Headers(request.headers);
            headers.set("Authorization", `Bearer ${accessToken}`);

            // retry the old request which failed due to unauthentication
            return ky.retry({
              request: new Request(request, { headers }),
              code: "TOKEN_REFRESHED",
            });
          } catch (error) {
            useTokensStore.getState().resetStore();
            window.location.replace(window.location.origin);
            throw error;
          } finally {
            resetActiveFetchings();
          }
        }
      },
    ],
  },
});
