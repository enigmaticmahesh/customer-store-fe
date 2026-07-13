import { api } from "@/api/api-client";
import type { RegisterFormData, RegisterResponse } from "./-register.interface";

const RegisterService = {
  registerUser: async (data: RegisterFormData): Promise<RegisterResponse> => {
    try {
      const res = await api
        .post("auth/register", {json: data, context: { skipTokenRefresh: true }})
        .json<RegisterResponse>();
      return res;
    } catch (err: unknown) {
      throw new Error("Failed to register. Please, try again", {
        cause: err,
      });
    }
  },
}

export default RegisterService
