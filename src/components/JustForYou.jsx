import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import './JustForYou.css';

export default function JustForYou({ products, onView, onAddToCart }) {
  const [visibleProducts, setVisibleProducts] = useState(12);

  return (
    <section>
      <div className="section-header">
        <h2 className="section-title">Just For You</h2>
      </div>
      <div className="grid-4">
        {products.slice(0, visibleProducts).map((p) => (
          <ProductCard key={p.id} product={p} onView={onView} onAddToCart={onAddToCart} />
        ))}
      </div>

      {visibleProducts < products.length && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={() => setVisibleProducts((prev) => prev + 8)}>
            Load More Products <ArrowRight size={18} />
          </button>
        </div>
      )}
    </section>
  );
}
