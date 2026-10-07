import { ArrowRight } from 'lucide-react';
import './Journal.css';

const POSTS = [
  { image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=600', tag: 'Tech', title: 'The Future of Workspace: Top 5 Gadgets in 2026' },
  { image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600', tag: 'Fashion', title: 'Minimalist Wardrobe Essentials for the Modern Pro' },
  { image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600', tag: 'Lifestyle', title: 'Transform Your Home into a Smart Sanctuary' },
];

export default function Journal() {
  return (
    <section className="journal">
      <div className="section-header">
        <h2 className="section-title">The Journal</h2>
      </div>
      <div className="grid-3">
        {POSTS.map((post) => (
          <div key={post.title} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-img" />
            <div className="blog-content">
              <span className="blog-date">{post.tag}</span>
              <h3 className="blog-title">{post.title}</h3>
              <a href="#" className="blog-link">Read Article <ArrowRight size={14} /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
