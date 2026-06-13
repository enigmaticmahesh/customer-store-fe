import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Lock, Mail } from "lucide-react"

const LoginForm = () => {
    return (
        <div className="max-w-md w-full md:pe-10 border-border sm:order-first order-last">
            <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
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
                            />
                            <InputGroupAddon align="inline-start">
                                <Mail className="text-muted-foreground" />
                            </InputGroupAddon>
                        </InputGroup>
                    </Field>
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
                                className="dark:bg-background h-9 shadow-xs text-muted-foreground font-normal"
                            />
                            <InputGroupAddon align="inline-start">
                                <Lock className="text-muted-foreground" />
                            </InputGroupAddon>
                        </InputGroup>
                    </Field>
                    <div className="mt-4">
                        <Button className="w-full">Login</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm