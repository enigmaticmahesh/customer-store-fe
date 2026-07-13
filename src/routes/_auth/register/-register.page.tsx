import { Link } from "@tanstack/react-router"
import RegisterForm from "./-components/register.form.component"

const RegisterPage = () => {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="text-primary font-semibold hover:underline"
            viewTransition
          >
            Sign In
          </Link>
        </p>
      </div>
      <RegisterForm />
    </>
  )
}

export default RegisterPage
