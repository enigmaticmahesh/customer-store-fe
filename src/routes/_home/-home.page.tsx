import CarouselSection from "./-components/carousel-section.component";
import FeaturedCategory from "./-components/featured-category.component";
import PopularProducts from "./-components/popular-products/popular-products.component";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero / Carousel Section */}
      <CarouselSection />

      {/* feature category's */}
      <FeaturedCategory />

      {/* popular products */}
      <PopularProducts />
    </div>
  );
};

export default HomePage;
