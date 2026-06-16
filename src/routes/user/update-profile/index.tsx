import { createFileRoute } from '@tanstack/react-router'
import { Camera, Check, Mail, MapPin, Phone, User } from 'lucide-react'
import Uploader from './-component/uploader.component'

const session = {
    "user": {
        "name": "Justin J. Ruiz",
        "email": "justin@gmail.com",
        "image": "https://images.pexels.com/photos/5254256/pexels-photo-5254256.jpeg",
        "id": "6439713c1d8869133e8881e9",
        "phone": "212-512-2888",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM5NzEzYzFkODg2OTEzM2U4ODgxZTkiLCJuYW1lIjoiSnVzdGluIEouIFJ1aXoiLCJlbWFpbCI6Imp1c3RpbkBnbWFpbC5jb20iLCJwaG9uZSI6IjIxMi01MTItMjg4OCIsImltYWdlIjoiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNTI1NDI1Ni9wZXhlbHMtcGhvdG8tNTI1NDI1Ni5qcGVnIiwiaWF0IjoxNzgxNTg0NTM1LCJleHAiOjE3ODE1ODYzMzV9.w0PkiioexYCzJhY3iPj_M99KRby8Gs9Fb8lbQgjmRa8",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Mzk3MTNjMWQ4ODY5MTMzZTg4ODFlOSIsImlhdCI6MTc4MTQyMDU5NiwiZXhwIjoxNzgyMDI1Mzk2fQ.5I_EwQD-y5f5uVnzZkixGV1Qh2MSMz3DGXF1ZDIvNSI"
    },
    "expires": "2026-07-16T04:47:47.665Z"
}

const UpdateProfilePage = () => {
    return (
        <div className="max-w-screen-2xl">
            {/* Header */}
            <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                        <User className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-foreground">
                            {/* {showingTranslateValue(
                                storeCustomizationSetting?.dashboard?.update_profile,
                            ) || "Update Profile"} */}
                            Update Profile
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Update your personal information
                        </p>
                    </div>
                </div>
            </div>

        {/* Success Message */}
        {/* {state?.success && (
            <div className="mb-6 p-4 bg-accent border border-primary rounded-xl flex items-center gap-3">
            <FiCheck className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-sm text-primary">{state.message}</p>
            </div>
        )} */}

        {/* Error Message */}
        {/* {state?.error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
            <FiAlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <p className="text-sm text-red-600">{state.error}</p>
            </div>
        )} */}

        <form>
            <div className="bg-background rounded-2xl shadow-lg border border-border p-6 lg:p-8">
            {/* Profile Photo Section */}
            <div className="mb-8">
                <label className="block text-muted-foreground font-medium text-sm mb-3">
                    <div className="flex items-center gap-2">
                        <Camera className="w-4 h-4" />
                        Profile Photo
                    </div>
                </label>
                <div className="flex items-center gap-6">
                    <Uploader />
                    {/* <div className="text-sm text-muted-foreground">
                        <p>Upload a new photo</p>
                        <p className="text-xs mt-1">
                        Recommended: 200x200px, JPG or PNG
                        </p>
                    </div> */}
                </div>
                {/* Hidden input for image URL */}
                {/* <input type="hidden" name="imageUrl" value={defaultImg || ""} /> */}
            </div>

            <div className="space-y-5">
                {/* Full Name */}
                <div className="form-group">
                    <label className="block text-muted-foreground font-medium text-sm mb-2">
                        {/* {showingTranslateValue(
                        storeCustomizationSetting?.dashboard?.full_name,
                        ) || "Full Name"} */}
                        Full Name
                        <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <User className="w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="text"
                            name="name"
                            defaultValue={session?.user?.name || ""}
                            placeholder="Enter your full name"
                            className="h-12 text-sm pl-11 pr-4 w-full rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none"
                        />
                    </div>
                    {/* {state?.errors?.name && (
                        <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                        <FiAlertCircle className="w-4 h-4" />
                        {state.errors.name.join(" ")}
                        </p>
                    )} */}
                </div>

                {/* Email Address */}
                <div className="form-group">
                    <label className="block text-muted-foreground font-medium text-sm mb-2">
                        {/* {showingTranslateValue(
                        storeCustomizationSetting?.dashboard?.user_email,
                        ) || "Email Address"} */}
                        Email Address
                    </label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Mail className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <input
                            type="email"
                            name="email"
                            defaultValue={session?.user?.email || ""}
                            readOnly
                            className="h-12 text-sm pl-11 pr-4 w-full rounded-xl border border-border bg-muted text-muted-foreground cursor-not-allowed"
                        />
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                        Email cannot be changed
                    </p>
                </div>

                {/* Phone & Address Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div className="form-group">
                        <label className="block text-muted-foreground font-medium text-sm mb-2">
                            {/* {showingTranslateValue(
                                storeCustomizationSetting?.dashboard?.user_phone,
                            ) || "Phone Number"} */}
                            Phone Number
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Phone className="w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            </div>
                            <input
                                type="tel"
                                name="phone"
                                defaultValue={session?.user?.phone || ""}
                                placeholder="+1 (555) 000-0000"
                                className="h-12 text-sm pl-11 pr-4 w-full rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none"
                            />
                        </div>
                        {/* {state?.errors?.phone && (
                        <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                            <FiAlertCircle className="w-4 h-4" />
                            {state.errors.phone.join(" ")}
                        </p>
                        )} */}
                    </div>

                    {/* Address */}
                    <div className="form-group">
                        <label className="block text-muted-foreground font-medium text-sm mb-2">
                            {/* {showingTranslateValue(
                                storeCustomizationSetting?.dashboard?.address,
                            ) || "Address"} */}
                            Address
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <MapPin className="w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            </div>
                            <input
                                type="text"
                                name="address"
                                // defaultValue={session?.user?.address || ""}
                                placeholder="Your address"
                                className="h-12 text-sm pl-11 pr-4 w-full rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none"
                            />
                        </div>
                        {/* {state?.errors?.address && (
                        <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                            <FiAlertCircle className="w-4 h-4" />
                            {state.errors.address.join(" ")}
                        </p>
                        )} */}
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-end">
                <button
                    type="submit"
                    // disabled={isPending}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-primary to-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:from-primary hover:to-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {/* {isPending ? (
                        <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            />
                            <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        <span>Updating...</span>
                        </>
                    ) : (
                        <>
                        <FiCheck className="w-5 h-5" />
                        <span>
                            {showingTranslateValue(
                            storeCustomizationSetting?.dashboard?.update_button,
                            ) || "Update Profile"}
                        </span>
                        </>
                    )} */}
                    <Check className="w-5 h-5" />
                    Update Profile
                </button>
            </div>
            </div>
        </form>
        </div>
    )
}

export const Route = createFileRoute('/user/update-profile/')({
  component: UpdateProfilePage,
})
