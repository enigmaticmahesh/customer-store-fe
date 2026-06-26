import { useState } from "react";

const session = {
  user: {
    name: "Justin J. Ruiz",
    email: "justin@gmail.com",
    image: "https://images.pexels.com/photos/5254256/pexels-photo-5254256.jpeg",
    id: "6439713c1d8869133e8881e9",
    phone: "212-512-2888",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM5NzEzYzFkODg2OTEzM2U4ODgxZTkiLCJuYW1lIjoiSnVzdGluIEouIFJ1aXoiLCJlbWFpbCI6Imp1c3RpbkBnbWFpbC5jb20iLCJwaG9uZSI6IjIxMi01MTItMjg4OCIsImltYWdlIjoiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNTI1NDI1Ni9wZXhlbHMtcGhvdG8tNTI1NDI1Ni5qcGVnIiwiaWF0IjoxNzgxNTg0NTM1LCJleHAiOjE3ODE1ODYzMzV9.w0PkiioexYCzJhY3iPj_M99KRby8Gs9Fb8lbQgjmRa8",
    refreshToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Mzk3MTNjMWQ4ODY5MTMzZTg4ODFlOSIsImlhdCI6MTc4MTQyMDU5NiwiZXhwIjoxNzgyMDI1Mzk2fQ.5I_EwQD-y5f5uVnzZkixGV1Qh2MSMz3DGXF1ZDIvNSI",
  },
  expires: "2026-07-16T04:47:47.665Z",
};

const ChangePasswordPage = () => {
  const [newPassword] = useState("");

  const pwdReqsUi = () => {
    const svgClass = (condition: boolean) => {
      const dynClass = condition ? "text-primary" : "text-muted-foreground";
      return `w-4 h-4 ${dynClass}`;
    };

    return (
      <div className="bg-muted rounded-xl p-4">
        <p className="text-sm font-medium text-muted-foreground mb-2">
          Password requirements:
        </p>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li className="flex items-center gap-2">
            <svg
              className={svgClass(newPassword.length >= 8)}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            At least 8 characters
          </li>
          <li className="flex items-center gap-2">
            <svg
              className={svgClass(/[a-zA-Z]/.test(newPassword))}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            At least one letter
          </li>
          <li className="flex items-center gap-2">
            <svg
              className={svgClass(/[0-9]/.test(newPassword))}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            At least one number
          </li>
          <li className="flex items-center gap-2">
            <svg
              className={svgClass(/[^a-zA-Z0-9]/.test(newPassword))}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            At least one special character
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="max-w-screen-2xl">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <svg
              className="w-5 h-5 text-primary-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">
              {/* {showingTranslateValue(dashboard?.change_password) ||
                                "Change Password"} */}
              Change Password
            </h2>
            <p className="text-sm text-muted-foreground">
              Update your account password for security
            </p>
          </div>
        </div>
      </div>

      <form>
        <div className="bg-background rounded-2xl shadow-lg border border-border p-6">
          <div className="space-y-5">
            {/* Email Field */}
            <div className="form-group">
              <label className="block text-muted-foreground font-medium text-sm mb-2">
                {/* {showingTranslateValue(dashboard?.user_email) ||
                            "Email Address"} */}
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  defaultValue={session?.user?.email}
                  readOnly
                  className="h-10 text-sm pl-11 pr-4 w-full rounded-xl border border-border bg-muted text-muted-foreground cursor-not-allowed"
                />
              </div>
              {/* <Error errorName={state?.errors?.email?.join(" ")} /> */}
            </div>

            {/* Current Password */}
            <div className="form-group">
              <label className="block text-muted-foreground font-medium text-sm mb-2">
                {/* {showingTranslateValue(dashboard?.current_password) ||
                            "Current Password"} */}
                Current Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  name="currentPassword"
                  autoComplete="new-password"
                  placeholder="Enter current password"
                  className="h-10 text-sm pl-11 pr-4 w-full rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
              </div>
              {/* <Error errorName={state?.errors?.currentPassword?.join(" ")} /> */}
            </div>

            {/* New Password */}
            <div className="form-group">
              <label className="block text-muted-foreground font-medium text-sm mb-2">
                {/* {showingTranslateValue(dashboard?.new_password) ||
                            "New Password"} */}
                New Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  name="newPassword"
                  autoComplete="new-password"
                  placeholder="Enter new password"
                  // onChange={(e) => setNewPassword(e.target.value)}
                  className="h-10 text-sm pl-11 pr-4 w-full rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
              </div>

              {/* Password Strength Indicator */}
              {/* {newPassword && (
                            <div className="mt-3">
                            <div className="flex gap-1 mb-1.5">
                                {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                                    i <= strength.level ? strength.color : "bg-muted"
                                    }`}
                                />
                                ))}
                            </div>
                            <p className={`text-xs font-medium ${strength.textColor}`}>
                                Password strength: {strength.label}
                            </p>
                            </div>
                        )}
                        <ErrorTwo errors={state?.errors?.newPassword} /> */}
            </div>

            {/* Password Requirements */}
            {pwdReqsUi()}
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-end">
            <button
              // disabled={pending}
              type="submit"
              // variant="create"
              // className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-cyan-600 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-cyan-700 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-primary to-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:from-primary hover:to-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Update Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
