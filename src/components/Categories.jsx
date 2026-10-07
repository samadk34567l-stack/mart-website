import './Categories.css';

const CATEGORIES = [
  { name: 'Mobiles', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=200' },
  { name: 'Laptops', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=200' },
  { name: 'Audio', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200' },
  { name: 'Watches', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=200' },
  { name: 'Fashion', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=200' },
  { name: 'Home', image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=200' },
  { name: 'Cameras', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=200' },
  { name: 'Gaming', image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=200' },
];

export default function Categories() {
  return (
    <section>
      <div className="section-header">
        <h2 className="section-title">Shop by Category</h2>
      </div>
      <div className="categories-grid">
        {CATEGORIES.map((c) => (
          <div key={c.name} className="category-card">
            <img src={c.image} alt={c.name} className="cat-img" />
            <span className="cat-name">{c.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
