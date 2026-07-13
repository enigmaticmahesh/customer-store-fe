import type { ApiResponse } from "@/api/api.interface"

export interface RegisterFormData {
  name: string
  email: string
  password: string
}

export type RegisterResponse = ApiResponse<{message: string}>
