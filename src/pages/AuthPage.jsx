import './AuthPage.css';

export default function AuthPage({ isLogin, onSubmit, onSwitch, onHome }) {
  return (
    <div className="auth-view">
      <div className="auth-overlay"></div>
      <div className="auth-card">
        <h2 className="auth-title">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        <p className="auth-subtitle">
          {isLogin ? 'Enter your details to access your premium account.' : 'Join NovaMart to experience premium shopping.'}
        </p>

        <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
          {!isLogin && (
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
          )}
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="john@example.com" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>
          <button type="submit" className="auth-btn">{isLogin ? 'Sign In' : 'Sign Up'}</button>
        </form>

        <div className="auth-switch">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button onClick={onSwitch}>{isLogin ? 'Sign Up' : 'Sign In'}</button>
        </div>
        <div className="auth-home">
          <button onClick={onHome}>Return to Home</button>
        </div>
      </div>
    </div>
  );
}
