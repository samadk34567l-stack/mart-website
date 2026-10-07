import { ArrowLeft, Star, ShieldCheck, Truck } from 'lucide-react';
import './ProductDetail.css';

export default function ProductDetail({ product, onBack, onAddToCart }) {
  if (!product) return null;
  const p = product;

  return (
    <div className="container detail-view">
      <button className="back-btn" onClick={onBack}><ArrowLeft size={20} /> Back to Catalog</button>
      <div className="detail-grid">
        <img src={p.image} alt={p.name} className="detail-image" />
        <div className="detail-info">
          <div className="d-cat">{p.category}</div>
          <h1 className="d-title">{p.name}</h1>
          <div className="d-rating">
            <div className="d-stars">
              {[1, 2, 3, 4, 5].map((n) => <Star key={n} fill="currentColor" size={18} />)}
            </div>
            <span className="d-rating-value">{p.rating}</span>
            <span>({p.reviews} reviews)</span>
          </div>
          <div className="d-price">
            ${p.price.toLocaleString()}
            {p.oldPrice && <span className="d-old-price">${p.oldPrice.toLocaleString()}</span>}
          </div>
          <p className="d-desc">{p.description}</p>
          <div className="d-actions">
            <button className="d-add-btn" onClick={() => onAddToCart(p)}>Add to Cart</button>
          </div>
          <div className="d-perks">
            <div className="d-perk"><ShieldCheck size={20} color="var(--primary)" /> 2 Year Extended Warranty Included</div>
            <div className="d-perk"><Truck size={20} color="var(--primary)" /> Free Express Shipping globally</div>
          </div>
        </div>
      </div>
    </div>
  );
}
