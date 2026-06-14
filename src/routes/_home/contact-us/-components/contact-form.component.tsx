import { Edit3, Mail, MessageSquare, Send, User } from "lucide-react"

const ContactForm = () => {
    const hasNameErr = false
    const errClasses = hasNameErr ? 'border-red-300 dark:border-red-700 focus:border-red-500 focus:ring-red-500' : 'border-border dark:border-border focus:border-primary focus:ring-primary'
    const nameFieldClasses = `w-full pl-11 pr-4 py-3 bg-muted dark:bg-muted border ${errClasses} rounded-xl text-foreground dark:text-white placeholder-muted-foreground dark:placeholder-muted-foreground focus:outline-none focus:ring-0.5 focus:ring-opacity-50 transition-all duration-200`
    const emailFieldClasses = `w-full pl-11 pr-4 py-3 bg-muted dark:bg-muted border ${errClasses} rounded-xl text-foreground dark:text-white placeholder-muted-foreground dark:placeholder-muted-foreground focus:outline-none focus:ring-0.5 focus:ring-opacity-50 transition-all duration-200`
    const subFieldClasses = `w-full pl-11 pr-4 py-3 bg-muted dark:bg-muted border ${errClasses} rounded-xl text-foreground dark:text-white placeholder-muted-foreground dark:placeholder-muted-foreground focus:outline-none focus:ring-0.5 focus:ring-opacity-50 transition-all duration-200`
    const msgFieldClasses = `w-full pl-11 pr-4 py-3 bg-muted dark:bg-muted border ${errClasses} rounded-xl text-foreground dark:text-white placeholder-muted-foreground dark:placeholder-muted-foreground focus:outline-none focus:ring-0.5 focus:ring-opacity-50 transition-all duration-200 resize-none`
    return (
        <div className="w-full">
            {/* Form Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-linear-to-br from-primary to-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                        <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground dark:text-white">
                            Get In Touch
                        </h3>
                    </div>
                </div>
                <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                    We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                </p>
            </div>

            {/* Success Message */}
            {/* {state?.success && (
                <div className="mb-6 p-4 bg-accent dark:bg-accent/20 border border-primary dark:border-primary rounded-xl flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-primary dark:text-primary mt-0.5 flex-shrink-0" />
                <div>
                    <h4 className="font-medium text-primary dark:text-accent-foreground">
                    Message Sent!
                    </h4>
                    <p className="text-sm text-primary dark:text-accent-foreground">
                    {state.message}
                    </p>
                </div>
                </div>
            )} */}

            {/* Error Message */}
            {/* {state?.error && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3">
                <FiAlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                    <h4 className="font-medium text-red-800 dark:text-red-200">
                    Error
                    </h4>
                    <p className="text-sm text-red-600 dark:text-red-300">
                    {state.error}
                    </p>
                </div>
                </div>
            )} */}

            {/* Contact Form */}
            <form className="space-y-5">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div className="space-y-2">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-muted-foreground dark:text-muted-foreground"
                        >
                            Your Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <User className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                className={nameFieldClasses}
                            />
                        </div>
                        {/* {state?.errors?.name && (
                        <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                            <FiAlertCircle className="w-4 h-4" />
                            {state.errors.name[0]}
                        </p>
                        )} */}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-muted-foreground dark:text-muted-foreground"
                        >
                            Your Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                                className={emailFieldClasses}
                            />
                        </div>
                        {/* {state?.errors?.email && (
                        <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                            <FiAlertCircle className="w-4 h-4" />
                            {state.errors.email[0]}
                        </p>
                        )} */}
                    </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                    <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-muted-foreground dark:text-muted-foreground"
                    >
                        Subject <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Edit3 className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="How can we help you?"
                            className={subFieldClasses}
                        />
                    </div>
                    {/* {state?.errors?.subject && (
                        <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                        <FiAlertCircle className="w-4 h-4" />
                        {state.errors.subject[0]}
                        </p>
                    )} */}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-muted-foreground dark:text-muted-foreground"
                    >
                        Message <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute top-4 left-0 pl-4 pointer-events-none">
                            <MessageSquare className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Write your message here..."
                            className={msgFieldClasses}
                        />
                    </div>
                    {/* {state?.errors?.message && (
                        <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                        <FiAlertCircle className="w-4 h-4" />
                        {state.errors.message[0]}
                        </p>
                    )} */}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                    <button
                        type="submit"
                        // disabled={isPending}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-linear-to-r from-primary to-primary hover:from-primary hover:to-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none"
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
                            <span>Sending...</span>
                        </>
                        ) : (
                        <>
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                        </>
                        )} */}
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm