import z from 'zod'
import type { RegisterFormData } from "./-register.interface";

export const InitialFormData: RegisterFormData = {
  name: '',
  email: '',
  password: ''
}

export const registerFormSchema = z.object({
  name: z.string().trim().min(1, { error: "Customer name cannot be empty" }),
  email: z.email({ error: "Please, enter a valid email" }),
  password: z.string().trim().min(6, { error: "Password must be atelast 6 characters long" }),
})
