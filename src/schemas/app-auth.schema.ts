import type { AppAuthData, AuthTokens } from "@/interfaces/app-auth.interface";

export const EmptyAuthUserData: AppAuthData = {
    id: '',
    role: '',
    email: '',
    fullName: '',
    authenticating: false
}

export const EmptyAuthTokens: AuthTokens = {
    refreshToken: '',
    accessToken: ''
}