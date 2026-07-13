import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import { InitialFormData, registerFormSchema } from "../-register.schemas"
import type { RegisterFormData } from "../-register.interface"
import { useRegisterUser } from "../-queries/register-user.query"
import { apiErrorMsg } from "@/app-utils/error-utils"
import { useNavigate } from "@tanstack/react-router"

const useRegisterForm = () => {
  const navigate = useNavigate()
  const {mutate: registerUser, isPending} = useRegisterUser()

  const handleSubmit = (data: RegisterFormData) => {
    registerUser(data, {
      onError: (err: unknown) => {
        const msg = apiErrorMsg(err, 'Failed to register. Please, try again.')
        toast.error(msg)
      },
      onSuccess: () => {
        toast.success('Congratulations! You are successfully registered. Please, login')
        navigate({ to: '/login', viewTransition: true })
      }
    })
  }

  const registerForm = useForm({
    defaultValues: InitialFormData,
    validators: {
      onSubmit: registerFormSchema
    },
    onSubmitInvalid({ value }) {
      const res = registerFormSchema.safeParse(value)
      if (res.error && res.error.issues.length > 0) {
        toast.error('Please, provide valid information', {
            description: res.error.issues[0].message
        })
      }
    },
    onSubmit: async ({ value }) => {
      handleSubmit(value)
    },
  })

  return {registerForm, isPending}
}

export default useRegisterForm
