import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
// import { InitialFormData, registerFormSchema } from "../-register.schemas"
// import type { RegisterFormData } from "../-register.interface"
// import { useRegisterUser } from "../-queries/register-user.query"
import { apiErrorMsg } from "@/app-utils/error-utils"
import { useNavigate } from "@tanstack/react-router"
import type { LoginFormData, LoginResponse } from "../-login.interface"
import { InitialFormData, loginFormSchema } from "../-login.schema"
import { useLoginUser } from "../-queries/login-user.query"
import { useTokensStore } from "@/stores/app-tokens.store"

const useLoginForm = () => {
  const navigate = useNavigate()
  const { mutate: loginUser, isPending } = useLoginUser()
  const updateStore =  useTokensStore(state => state.updateStore)

  const handleSubmit = (data: LoginFormData) => {
    loginUser(data, {
      onError: (err: unknown) => {
        const msg = apiErrorMsg(err, 'Failed to login. Please, try again.')
        toast.error(msg)
      },
      onSuccess: (res: LoginResponse) => {
        updateStore({...res.data})
        toast.success('Congratulations! You are successfully logged in. Enjoy shopping!!!')
        navigate({ to: '/user/dashboard', viewTransition: true })
      }
    })
  }

  const loginForm = useForm({
    defaultValues: InitialFormData,
    validators: {
      onSubmit: loginFormSchema
    },
    onSubmitInvalid({ value }) {
      const res = loginFormSchema.safeParse(value)
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

  return {loginForm, isPending}
}

export default useLoginForm
