import z from 'zod'
import type { LoginFormData } from './-login.interface';

export const InitialFormData: LoginFormData = {
  email: '',
  password: ''
}

export const loginFormSchema = z.object({
  email: z.email({ error: "Please, enter a valid email" }),
  password: z.string().trim().min(6, { error: "Password must be atelast 6 characters long" }),
})
