import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

const PageHeader = () => {
  return (
    <div className="bg-muted/50 border-b border-border">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 py-8 lg:py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
          About Us
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

const AboutUsPage = () => {
  return (
    <div className="bg-background">
      <PageHeader />

      <div className="bg-background text-foreground">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          <div className="grid grid-flow-row lg:grid-cols-2 gap-4 lg:gap-16 items-center">
            <div className="">
              <h3 className="text-xl lg:text-3xl mb-2 font-semibold text-foreground">
                {/* {t("common:about-section-title")} */}
                {/* <CMSkeletonTwo
                  count={1}
                  height={50}
                  error={error}
                  loading={false}
                  data={about_us?.top_title}
                /> */}
                Welcome to our KachaBazar shop
              </h3>
              <div className="mt-3 text-base text-muted-foreground leading-7">
                <p>
                  {/* <CMSkeletonTwo
                    count={5}
                    height={20}
                    error={error}
                    loading={false}
                    data={about_us?.top_description}
                  /> */}
                  Holisticly seize parallel metrics and functional
                  ROI.Seamlessly revolutionize error-free internal or organic
                  sources before effective scenarios. Progressively incentivize
                  state of the art applications for efficient intellectual
                  capital. Credibly leverage existing distinctive mindshare
                  through cutting-edge schemas. Proactively procrastinate team
                  building paradigms coordinate client-centric total transparent
                  internal. Dynamically embrace diverse customer service and
                  installed base paradigms. Credibly seize enterprise-wide
                  experiences for end-to-end data. Professionally brand flexible
                  alignments and cost effective architectures. Enthusiastically
                  incentivize seamless communities with seamlessly facilitate
                  revolutionary metrics with strategic theme areas.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-2 xl:gap-6 mt-8">
                <div className="p-8 bg-primary/5 dark:bg-primary/10 border border-primary/10 shadow-sm rounded-xl">
                  {/* {error ? (
                    <CMSkeletonTwo
                      count={8}
                      height={20}
                      error={error}
                      loading={false}
                    />
                  ) : (
                    <>
                      <span className="text-3xl block font-extrabold mb-4 text-primary">
                        {showingTranslateValue(about_us?.card_two_title)}
                      </span>
                      <h4 className="text-lg font-bold mb-1 text-foreground">
                        {showingTranslateValue(about_us?.card_two_sub)}
                      </h4>
                      <p className="mb-0 text-muted-foreground leading-7">
                        {showingTranslateValue(
                          storeCustomizationSetting?.about_us
                            ?.card_two_description,
                        )}
                      </p>
                    </>
                  )} */}

                  <>
                    <span className="text-3xl block font-extrabold mb-4 text-primary">
                      8K
                    </span>
                    <h4 className="text-lg font-bold mb-1 text-foreground">
                      Lovely Customer
                    </h4>
                    <p className="mb-0 text-muted-foreground leading-7">
                      Competently productize virtual models without performance.
                    </p>
                  </>
                </div>
                <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                  {/* {error ? (
                    <CMSkeletonTwo
                      count={8}
                      height={20}
                      error={error}
                      loading={false}
                    />
                  ) : (
                    <>
                      <span className="text-3xl block font-extrabold mb-4 text-primary">
                        {showingTranslateValue(about_us?.card_one_title)}
                      </span>
                      <h4 className="text-lg font-bold mb-1 text-foreground">
                        {showingTranslateValue(about_us?.card_one_sub)}
                      </h4>
                      <p className="mb-0 text-muted-foreground leading-7">
                        {showingTranslateValue(
                          storeCustomizationSetting?.about_us
                            ?.card_one_description,
                        )}
                      </p>
                    </>
                  )} */}
                  <>
                    <span className="text-3xl block font-extrabold mb-4 text-primary">
                      10K
                    </span>
                    <h4 className="text-lg font-bold mb-1 text-foreground">
                      Listed Products
                    </h4>
                    <p className="mb-0 text-muted-foreground leading-7">
                      Dynamically morph team driven partnerships after vertical
                    </p>
                  </>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <img
                width={920}
                height={750}
                src="https://res.cloudinary.com/ahossain/image/upload/v1697439245/settings/v7g6gowiju0wanpwx70f.jpg"
                alt="logo"
              />
            </div>
          </div>
          <div className="mt-10 lg:mt-16 text-base text-muted-foreground leading-7">
            <p>
              {/* <CMSkeletonTwo
                count={5}
                height={20}
                error={error}
                loading={false}
                data={about_us?.middle_description_one}
              /> */}
              Holisticly seize parallel metrics and functional ROI. Seamlessly
              revolutionize error-free internal or organic sources before
              effective scenarios. Progressively incentivize state of the art
              applications for efficient intellectual capital. Credibly leverage
              existing distinctive mindshare through cutting-edge schemas.
              Proactively procrastinate team building paradigms coordinate
              client-centric total transparent internal. Energistically
              reconceptualize global leadership for high-quality networks.
              Credibly restore an expanded array of systems rather than accurate
              results. Collaboratively synergize backend bandwidth without 24/7
              functionalities. Credibly utilize proactive ideas whereas
              cross-media core competencies. Uniquely maximize professional best
              practices through resource maximizing services. Conveniently
              architect cross-unit web services for e-business imperatives.
            </p>

            <p>
              {/* <CMSkeletonTwo
                count={8}
                height={20}
                error={error}
                loading={false}
                data={about_us?.middle_description_two}
              /> */}
              Appropriately visualize market-driven data before one-to-one
              scenarios. Collaboratively productize multifunctional ROI through
              intuitive supply chains. Enthusiastically seize revolutionary
              value and process-centric services. Competently harness intuitive
              information after interoperable markets. Interactively
              revolutionize future-proof value before granular sources.
              Dynamically embrace diverse customer service and installed base
              paradigms. Credibly seize enterprise-wide experiences for
              end-to-end data. Professionally brand flexible alignments and cost
              effective architectures. Enthusiastically incentivize seamless
              communities with seamlessly facilitate revolutionary metrics with
              strategic theme areas.
            </p>
          </div>
          <div className="mt-10 lg:mt-12 flex flex-col sm:grid gap-4">
            <img
              width={1920}
              height={570}
              src="https://res.cloudinary.com/ahossain/image/upload/v1697439195/settings/sl8vzvzm54jgzq6sphn2.jpg"
              alt="logo"
              className="block rounded-lg"
            />
          </div>
        </div>
        {/* <div className="bg-muted/50 dark:bg-muted/30 lg:py-20 py-10 border-t border-border/50">
          <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
            <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div className="max-w-2xl">
                <h3 className="text-xl lg:text-3xl mb-2 font-semibold">
                  <CMSkeletonTwo
                    count={1}
                    height={50}
                    error={error}
                    loading={false}
                    data={about_us?.founder_title}
                  />
                </h3>
                <p className="mt-2 md:mt-3 font-normal block text-base">
                  <CMSkeletonTwo
                    count={3}
                    height={20}
                    error={error}
                    loading={false}
                    data={about_us?.founder_description}
                  />
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-6 xl:gap-x-8">
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src={about_us?.founder_one_img || "/team/team-1.jpg"}
                  alt="team-1"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold ">
                    {showingTranslateValue(about_us?.founder_one_name)}
                  </h5>
                  <span className="opacity-75 text-sm">
                    {showingTranslateValue(about_us?.founder_one_sub)}
                  </span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src={about_us?.founder_two_img || "/team/team-2.jpg"}
                  alt="team-2"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold ">
                    {showingTranslateValue(about_us?.founder_two_name)}
                  </h5>
                  <span className="opacity-75 text-sm">
                    {showingTranslateValue(about_us?.founder_two_sub)}
                  </span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src={about_us?.founder_three_img || "/team/team-3.jpg"}
                  alt="team-3"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold ">
                    {showingTranslateValue(about_us?.founder_three_name)}
                  </h5>
                  <span className="opacity-75 text-sm">
                    {showingTranslateValue(about_us?.founder_three_sub)}
                  </span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src={about_us?.founder_four_img || "/team/team-4.jpg"}
                  alt="team-4"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold ">
                    {showingTranslateValue(about_us?.founder_four_name)}
                  </h5>
                  <span className="opacity-75 text-sm">
                    {showingTranslateValue(about_us?.founder_four_sub)}
                  </span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src={about_us?.founder_five_img || "/team/team-5.jpg"}
                  alt="team-5"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold ">
                    {showingTranslateValue(about_us?.founder_five_name)}
                  </h5>
                  <span className="opacity-75 text-sm">
                    {showingTranslateValue(about_us?.founder_five_sub)}
                  </span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src={about_us?.founder_six_img || "/team/team-6.jpg"}
                  alt="team-6"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold">
                    {showingTranslateValue(about_us?.founder_six_name)}
                  </h5>
                  <span className="opacity-75 text-sm">
                    {showingTranslateValue(about_us?.founder_six_sub)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUsPage;
