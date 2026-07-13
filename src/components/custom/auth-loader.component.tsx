import { Badge } from "../ui/badge"
import { Spinner } from "../ui/spinner"

const AuthLoader = () => {
    return (
        <div className="fixed inset-0 z-50 flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10">
            <div className="w-full max-w-sm text-center">
                <Badge variant="outline">
                    <Spinner data-icon="inline-start" />
                    Authenticating...
                </Badge>
            </div>
        </div>
    )
}

export default AuthLoader
