import { Link } from "@tanstack/react-router";
import LoginForm from "./-components/login.form.component";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-background">
      {/* Left Side: Background Image Area (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-muted">
        <img
          src="https://images.pexels.com/photos/11039960/pexels-photo-11039960.jpeg"
          alt="grocery_store"
          className="h-svh w-full object-cover"
        />
      </div>

      {/* Right Side: Form Area */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-24 relative">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="mb-8">
            <Link to="/" className="inline-block relative h-10 w-40">
              {/* <Image
                  src={globalSetting?.logo || "/logo/logo-color.svg"}
                  alt={globalSetting?.shop_name || "Kacha Bazar"}
                  fill
                  className="object-contain object-left"
                /> */}
            </Link>
          </div>

          {/* Headers */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Sign in to your account
            </h1>
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link
                to="/"
                //   to="/auth/signup"
                className="text-primary font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
