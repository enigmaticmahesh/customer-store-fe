export type Roles = 'admin'|'user'|''

export interface AuthUser {
    id: string,
    role: Roles,
    email: string,
    fullName: string,
}
export interface AppAuthData extends AuthUser {
    authenticating: boolean
}
export interface AuthTokens {
    refreshToken: string
    accessToken: string
}

export interface AuthStore extends AppAuthData {
    updateStore: (data: Partial<AppAuthData>) => void,
    fetchUserProfile: () => Promise<any|null>,
    // fetchUserProfile: () => Promise<ApiResponse<AuthUser>>,
    resetStore: () => void,
}
export interface TokensStore extends AuthTokens {
    updateStore: (data: Partial<AuthTokens>) => void,
    resetStore: () => void,
}