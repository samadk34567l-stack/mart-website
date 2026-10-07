import { Quote, Star } from 'lucide-react';
import './Testimonials.css';

const REVIEWS = [
  { name: 'Sarah Jenkins', role: 'Design Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150', text: 'The quality of the products is unmatched. Shipping was incredibly fast, and the packaging felt like a premium unboxing experience. NovaMart is my go-to.' },
  { name: 'Michael Chen', role: 'Tech Enthusiast', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150', text: 'I bought the MacBook Pro and some accessories. The customer support team was brilliant in helping me choose the right specs. Flawless service.' },
  { name: 'Elena Rodriguez', role: 'Fashion Blogger', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150', text: "Curated perfection. Every piece I've ordered from the fashion section has been absolutely authentic and gorgeous. Love the aesthetic of the store!" },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="section-title testimonials-title">What Our Clients Say</h2>
      <div className="grid-3 container">
        {REVIEWS.map((r) => (
          <div key={r.name} className="test-card">
            <Quote className="quote-icon" />
            <div className="test-stars">
              {[1, 2, 3, 4, 5].map((n) => <Star key={n} fill="currentColor" size={16} />)}
            </div>
            <p className="test-text">"{r.text}"</p>
            <div className="test-user">
              <img src={r.image} alt={r.name} className="user-avatar" />
              <div>
                <div className="user-name">{r.name}</div>
                <div className="user-role">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
