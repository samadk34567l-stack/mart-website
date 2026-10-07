import './Newsletter.css';

export default function Newsletter() {
  return (
    <section className="newsletter-section">
      <h2 className="news-title brand-font">Join the Premium Club</h2>
      <p className="news-desc">Subscribe to receive early access to exclusive drops and insider promotions.</p>
      <div className="news-form">
        <input type="email" placeholder="Enter your email address" />
        <button>Subscribe</button>
      </div>
    </section>
  );
}
