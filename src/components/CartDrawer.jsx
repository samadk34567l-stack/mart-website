import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import './CartDrawer.css';

export default function CartDrawer({ isOpen, onClose, cartItems, cartCount, cartTotal, onUpdateQuantity }) {
  return (
    <>
      <div className={`drawer-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2><ShoppingCart size={24} /> Your Cart ({cartCount})</h2>
          <button className="close-btn" onClick={onClose}><X size={28} /></button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <ShoppingCart size={64} className="cart-empty-icon" />
              <p>Your cart is empty.</p>
              <button className="continue-btn" onClick={onClose}>Continue Shopping</button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.product.id} className="cart-item">
                <img src={item.product.image} alt={item.product.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <div className="cart-item-title">{item.product.name}</div>
                  <div className="cart-item-price">${item.product.price}</div>
                  <div className="qty-controls">
                    <button className="qty-btn" onClick={() => onUpdateQuantity(item.product.id, -1)}><Minus size={14} /></button>
                    <span className="qty-value">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => onUpdateQuantity(item.product.id, 1)}><Plus size={14} /></button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total"><span>Subtotal</span><span>${cartTotal.toLocaleString()}</span></div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </>
  );
}
