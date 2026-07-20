import type { AuthTokens, TokensStore } from "@/core/interfaces/app-auth.interface";
import { EmptyAuthTokens } from "@/core/schemas/app-auth.schema";
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

export const useTokensStore = create<TokensStore>()(
  persist(
    (set) => ({
    ...EmptyAuthTokens,
    updateStore: (newData: Partial<AuthTokens>) => set((state) => ({...state, ...newData})),
    resetStore: () => set(() => EmptyAuthTokens)
    }),
    {
      name: 'OMA_TOKENS', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  )
)
