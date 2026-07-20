import { isRedirect, redirect } from "@tanstack/react-router";
import { useTokensStore } from "@/core/stores/app-tokens.store";
import { useAuthUserStore } from "@/core/stores/app-auth-user.store";

export const checkAuth = async () => {
  const accessToken = useTokensStore.getState().accessToken;
  if (!accessToken) {
    return redirect({
      to: "/",
      search: { redirect: location.href },
    });
  }

  const userId = useAuthUserStore.getState().id
  if (userId) {
      return
  }

  try {
    const err = await useAuthUserStore.getState().fetchUserProfile();
    if (err) {
      throw redirect({
        to: "/",
        search: { redirect: location.href },
      });
    }
  } catch (err: unknown) {
    // Re-throw redirects (they're intentional, not errors)
    if (isRedirect(err)) throw err;

    // Auth check failed (network error, etc.) - redirect to login
    throw redirect({
      to: "/",
      search: { redirect: location.href },
    });
  }
};
