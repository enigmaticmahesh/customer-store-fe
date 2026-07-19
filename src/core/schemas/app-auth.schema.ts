import type { AppAuthData, AuthTokens } from "@/core/interfaces/app-auth.interface";

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
