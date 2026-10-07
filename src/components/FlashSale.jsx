import { ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import './FlashSale.css';

export default function FlashSale({ products, onView, onAddToCart }) {
  return (
    <section>
      <div className="section-header">
        <h2 className="section-title flash-title">
          <span className="flash-icon">⚡</span> Flash Sale
        </h2>
        <a href="#" className="view-all">View All <ChevronRight size={16} /></a>
      </div>
      <div className="flash-sale-container">
        {products.slice(0, 6).map((p) => (
          <div key={p.id} className="flash-sale-item">
            <ProductCard product={p} onView={onView} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </section>
  );
}
