import { Link } from "@tanstack/react-router";
import { ChevronRight, Clock, Home, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./-components/contact-form.component";

const PageHeader = () => {
  return (
    <div className="bg-muted/50 border-b border-border">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 py-8 lg:py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
          Contact Us
        </h1>
        <nav className="flex items-center gap-1.5 mt-3 text-sm text-muted-foreground">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-primary transition-colors"
            viewTransition
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium">Contact Us</span>
        </nav>
      </div>
    </div>
  );
};

const ContactUsPage = () => {
  const email = "support@example.com";
  const phone = "+1 234 567 890";
  return (
    <div className="min-h-screen bg-background">
      {/* page header starts */}
      <PageHeader />
      {/* page header ends */}
      <div className="relative z-10 -mt-4 sm:-mt-6 max-w-screen-2xl mx-auto py-12 lg:py-20 px-4 sm:px-10">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Email Card */}
          <div className="group bg-background dark:bg-muted p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border dark:border-border">
            <div className="w-14 h-14 bg-linear-to-br from-primary to-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h5 className="text-lg font-semibold text-foreground dark:text-white mb-2">
              {/* {error ? (
                            <CMSkeletonTwo
                            count={1}
                            height={20}
                            error={error}
                            loading={false}
                            />
                        ) : (
                            showingTranslateValue(contact_us?.email_box_title) || "Email Us"
                        )} */}
              Email Us
            </h5>
            <a
              href={`mailto:${email}`}
              className="text-primary dark:text-primary hover:text-primary dark:hover:text-accent-foreground font-medium transition-colors"
            >
              {email}
            </a>
            <p className="text-sm text-muted-foreground dark:text-muted-foreground mt-1">
              We reply within 24 hours
            </p>
          </div>

          {/* Phone Card */}
          <div className="group bg-background dark:bg-muted p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border dark:border-border">
            <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h5 className="text-lg font-semibold text-foreground dark:text-white mb-2">
              {/* {error ? (
                            <CMSkeletonTwo
                            count={1}
                            height={20}
                            error={error}
                            loading={false}
                            />
                        ) : (
                            showingTranslateValue(contact_us?.call_box_title) || "Call Us"
                        )} */}
              Call Us
            </h5>
            <a
              href={`tel:${phone}`}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
            >
              {phone}
            </a>
            <p className="text-sm text-muted-foreground dark:text-muted-foreground mt-1">
              Mon-Fri 9am-6pm
            </p>
          </div>

          {/* Address Card */}
          <div className="group bg-background dark:bg-muted p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border dark:border-border">
            <div className="w-14 h-14 bg-linear-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h5 className="text-lg font-semibold text-foreground dark:text-white mb-2">
              {/* {error ? (
                            <CMSkeletoVisit UsnTwo
                            count={1}
                            height={20}
                            error={error}
                            loading={false}
                            />
                        ) : (
                            showingTranslateValue(contact_us?.address_box_title) ||
                            ""
                        )} */}
              Visit Us
            </h5>
            <p className="text-muted-foreground dark:text-muted-foreground text-sm leading-relaxed">
              {/* {contact_us?.address_box_address_two && (
                            <>
                            <br />
                            {showingTranslateValue(contact_us?.address_box_address_two)}
                            </>
                        )} */}
              Boho One, Bridge Street West, Middlesbrough, North Yorkshire, TS2
              1AE.
              <br />
              561-4535 Nulla LA
            </p>
          </div>

          {/* Hours Card */}
          <div className="group bg-background dark:bg-muted p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border dark:border-border">
            <div className="w-14 h-14 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h5 className="text-lg font-semibold text-foreground dark:text-white mb-2">
              Business Hours
            </h5>
            <p className="text-muted-foreground dark:text-muted-foreground text-sm">
              Monday - Friday
            </p>
            <p className="text-muted-foreground dark:text-muted-foreground text-sm">
              9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-background dark:bg-muted rounded-3xl shadow-sm border border-border dark:border-border overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Side */}
            <div className="hidden lg:block relative bg-linear-to-br from-primary to-primary p-12">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-40 h-40 bg-background rounded-full" />
                <div className="absolute bottom-10 right-10 w-60 h-60 bg-background rounded-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-background rounded-full" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-center">
                {/* <Image
                        width={500}
                        height={500}
                        src={contact_us?.midLeft_col_img || "/contact-us.png"}
                        alt="Contact us"
                        className="w-full max-w-md mx-auto"
                        /> */}
                <img
                  src="https://res.cloudinary.com/ahossain/image/upload/v1697472924/settings/contact-us_zvwn2n.png"
                  alt="Contact us"
                  width={500}
                  height={500}
                  className="w-full max-w-md mx-auto"
                />
                <div className="text-center mt-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    We're Here to Help
                  </h3>
                  <p className="text-accent">
                    Have a question or feedback? We'd love to hear from you.
                  </p>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-8 lg:p-12">
              {/* <ContactForm
                        formTitle={showingTranslateValue(contact_us?.form_title)}
                        formDescription={showingTranslateValue(
                        contact_us?.form_description,
                        )}
                    /> */}
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
