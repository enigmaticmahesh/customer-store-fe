import { api } from "@/api/api-client";
import type { ApiResponse } from "@/api/api.interface";
import type { AppAuthData, AuthStore, AuthUser } from "@/interfaces/app-auth.interface";
import { EmptyAuthUserData } from "@/schemas/app-auth.schema";
import { create } from "zustand";

export const useAuthUserStore = create<AuthStore>((set, get) => ({
    ...EmptyAuthUserData,
    updateStore: (newData: Partial<AppAuthData>) => set((state) => ({...state, ...newData})),
    fetchUserProfile: async () => {
        let data = {authenticating: true}
        get().updateStore(data)

        const {res, err} = await api.get('user/me').json<ApiResponse<AuthUser>>()
        .then((data: ApiResponse<AuthUser>) => ({res: data, err: null}))
        .catch((err: any) => ({res: null, err}))

        data.authenticating = false
        if (err) {
            get().updateStore(data)
            return err
        }
        
        // "res" will always have data(but we have made the data in ApiResponse as optional) as we have checked for "err" before
        data = {...data, ...res?.data} 
        
        get().updateStore({...data})
        return err
    },
    resetStore: () => set(() => EmptyAuthUserData)
}))