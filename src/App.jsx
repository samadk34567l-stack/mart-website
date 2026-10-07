import { useState } from 'react';
import { products } from './data/products';
import Header from './components/Header';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import AuthPage from './pages/AuthPage';

export default function App() {
  const [currentView, setCurrentView] = useState('HOME');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const goTo = (view) => { setCurrentView(view); window.scrollTo(0, 0); };
  const goHome = () => goTo('HOME');
  const goLogin = () => goTo('LOGIN');
  const goSignup = () => goTo('SIGNUP');

  const viewProduct = (product) => {
    setSelectedProduct(product);
    goTo('PRODUCT_DETAIL');
  };

  const addToCart = (product, e) => {
    if (e) e.stopPropagation();
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === id) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Header
        cartCount={cartCount}
        onLogoClick={goHome}
        onAccountClick={goLogin}
        onCartClick={() => setIsCartOpen(true)}
      />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        cartCount={cartCount}
        cartTotal={cartTotal}
        onUpdateQuantity={updateQuantity}
      />

      {currentView === 'HOME' && (
        <HomePage products={products} onViewProduct={viewProduct} onAddToCart={addToCart} />
      )}
      {currentView === 'PRODUCT_DETAIL' && (
        <ProductDetail product={selectedProduct} onBack={goHome} onAddToCart={addToCart} />
      )}
      {currentView === 'LOGIN' && (
        <AuthPage isLogin onSubmit={goHome} onSwitch={goSignup} onHome={goHome} />
      )}
      {currentView === 'SIGNUP' && (
        <AuthPage isLogin={false} onSubmit={goHome} onSwitch={goLogin} onHome={goHome} />
      )}

      {currentView !== 'LOGIN' && currentView !== 'SIGNUP' && <Footer />}
    </>
  );
}
