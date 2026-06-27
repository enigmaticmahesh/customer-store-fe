import CarouselSection from "./-components/carousel-section.component";
import FeaturedCategory from "./-components/featured-category.component";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero / Carousel Section */}
      <CarouselSection />

      {/* feature category's */}
      <FeaturedCategory />
    </div>
  );
};

export default HomePage;
