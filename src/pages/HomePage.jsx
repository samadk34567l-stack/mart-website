import Hero from '../components/Hero';
import TopBrands from '../components/TopBrands';
import DealOfTheDay from '../components/DealOfTheDay';
import Categories from '../components/Categories';
import FlashSale from '../components/FlashSale';
import JustForYou from '../components/JustForYou';
import Journal from '../components/Journal';
import StoreFeatures from '../components/StoreFeatures';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

export default function HomePage({ products, onViewProduct, onAddToCart }) {
  return (
    <main>
      <div className="container">
        <Hero />
        <TopBrands />
        <DealOfTheDay />
        <Categories />
        <FlashSale products={products} onView={onViewProduct} onAddToCart={onAddToCart} />
        <JustForYou products={products} onView={onViewProduct} onAddToCart={onAddToCart} />
        <Journal />
        <StoreFeatures />
        <Testimonials />
        <Newsletter />
      </div>
    </main>
  );
}
