import { useMutation } from "@tanstack/react-query"
import LoginService from "../-login.service"
import type { LoginFormData } from "../-login.interface"

export function useLoginUser() {
    return useMutation({
        mutationFn: async (data: LoginFormData) => LoginService.loginUser(data)
    })
}
