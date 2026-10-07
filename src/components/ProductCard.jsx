import { ShoppingCart } from 'lucide-react';
import './ProductCard.css';

export default function ProductCard({ product, onView, onAddToCart }) {
  return (
    <div className="product-card" onClick={() => onView(product)}>
      <div className="product-img-wrapper">
        {product.oldPrice && <div className="product-badge">Sale</div>}
        <img src={product.image} alt={product.name} className="product-img" loading="lazy" />
      </div>
      <div className="product-info">
        <div className="product-cat">{product.category}</div>
        <div className="product-name">{product.name}</div>
        <div className="product-price-row">
          <span className="price">${product.price.toLocaleString()}</span>
          {product.oldPrice && <span className="old-price">${product.oldPrice.toLocaleString()}</span>}
        </div>
        <button className="add-cart-btn" onClick={(e) => onAddToCart(product, e)}>
          <ShoppingCart size={18} /> Add to Cart
        </button>
      </div>
    </div>
  );
}
