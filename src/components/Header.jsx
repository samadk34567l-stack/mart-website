import { Search, ShoppingCart, User } from 'lucide-react';
import './Header.css';

export default function Header({ cartCount, onLogoClick, onAccountClick, onCartClick }) {
  return (
    <header className="header">
      <div className="container flex-between">
        <div className="logo" onClick={onLogoClick}>
          <div className="logo-icon">
            <ShoppingCart size={24} color="white" />
          </div>
          Nova<span>Mart</span>
        </div>

        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search for premium tech, fashion, & lifestyle..." />
        </div>

        <div className="header-actions">
          <button className="action-btn" onClick={onAccountClick}>
            <User size={22} /> <span className="hide-mobile">Account</span>
          </button>
          <button className="action-btn" onClick={onCartClick}>
            <div className="cart-icon-wrap">
              <ShoppingCart size={22} />
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </div>
            <span className="hide-mobile">Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
}
