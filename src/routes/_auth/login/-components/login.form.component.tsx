import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Lock, Mail } from "lucide-react";
import useLoginForm from "../-hooks/useLoginForm";
import { Spinner } from "@/components/ui/spinner";
import type { SubmitEvent } from "react";

const LoginForm = () => {
  const { loginForm, isPending } = useLoginForm();

  const formHandler = (e: SubmitEvent<HTMLFormElement>) => {
      e.preventDefault()
      e.stopPropagation()
      if (isPending) return
      loginForm.handleSubmit()
  }

  const emailField = (
    <loginForm.Field
      name="email"
      children={(field) => (
        <Field className="gap-1.5">
          <FieldLabel
            htmlFor="email"
            className="text-sm text-muted-foreground font-normal"
          >
            Email
          </FieldLabel>
          <InputGroup className="h-auto">
            <InputGroupInput
              id="email"
              type="email"
              placeholder="harihara@example.com"
              className="dark:bg-background! h-9 shadow-xs text-muted-foreground font-normal"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            <InputGroupAddon align="inline-start">
              <Mail className="text-muted-foreground" />
            </InputGroupAddon>
          </InputGroup>
        </Field>
      )}
    />
  );
  const pwdField = (
    <loginForm.Field
      name="password"
      children={(field) => (
        <Field className="gap-1.5">
          <FieldLabel
            htmlFor="password"
            className="text-sm text-muted-foreground font-normal"
          >
            Password
          </FieldLabel>
          <InputGroup className="h-auto">
            <InputGroupInput
              id="password"
              type="password"
              placeholder="********"
              className="dark:bg-background! h-9 shadow-xs text-muted-foreground font-normal"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            <InputGroupAddon align="inline-start">
              <Lock className="text-muted-foreground" />
            </InputGroupAddon>
          </InputGroup>
        </Field>
      )}
    />
  );

  const btnUi = isPending ? <><Spinner />&nbsp;Please wait...</> : 'Login'
  return (
    <div className="max-w-md w-full md:pe-10 border-border sm:order-first order-last">
      <form className="flex flex-col gap-6" onSubmit={formHandler}>
        <div className="flex flex-col gap-4">
          {emailField}
          {pwdField}
          <div className="mt-4">
            <Button type="submit" className="w-full" disabled={isPending}>{btnUi}</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
