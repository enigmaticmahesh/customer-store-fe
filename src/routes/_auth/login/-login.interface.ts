import type { ApiResponse } from "@/api/api.interface"

export interface LoginFormData {
  email: string
  password: string
}

export type LoginResponse = ApiResponse<{accessToken: string, refreshToken: string}>
