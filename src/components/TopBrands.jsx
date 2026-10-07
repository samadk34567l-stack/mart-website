import './TopBrands.css';

const BRANDS = ['SAMSUNG', 'APPLE', 'SONY', 'NIKE', 'ROLEX', 'DYSON'];

export default function TopBrands() {
  return (
    <section className="top-brands">
      <div className="brands-container">
        {BRANDS.map((brand) => (
          <span key={brand} className="brand-logo-text">{brand}</span>
        ))}
      </div>
    </section>
  );
}
