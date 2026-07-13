import { api } from "@/api/api-client";
import type { LoginFormData, LoginResponse } from "./-login.interface";

const LoginService = {
  loginUser: async (data: LoginFormData): Promise<LoginResponse> => {
    try {
      const res = await api
        .post("auth/login", {json: data, context: { skipTokenRefresh: true }})
        .json<LoginResponse>();
      return res;
    } catch (err: unknown) {
      throw new Error("Failed to login. Please, try again", {
        cause: err,
      });
    }
  },
}

export default LoginService
