import { useMutation } from "@tanstack/react-query"
import type { RegisterFormData } from "../-register.interface"
import RegisterService from "../-register.service"

export function useRegisterUser() {
    return useMutation({
        mutationFn: async (data: RegisterFormData) => RegisterService.registerUser(data)
    })
}
