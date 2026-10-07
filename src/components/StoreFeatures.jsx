import { Truck, ShieldCheck, Clock } from 'lucide-react';
import './StoreFeatures.css';

const FEATURES = [
  { Icon: Truck, title: 'Free Global Shipping', desc: 'On all orders over $200' },
  { Icon: ShieldCheck, title: 'Secure Payments', desc: '256-bit SSL encryption' },
  { Icon: Clock, title: '24/7 Concierge', desc: 'Premium customer support' },
];

export default function StoreFeatures() {
  return (
    <section className="features-section">
      <div className="grid-3">
        {FEATURES.map(({ Icon, title, desc }) => (
          <div key={title} className="feature-card">
            <div className="feature-icon"><Icon size={28} /></div>
            <div>
              <div className="feature-title">{title}</div>
              <div className="feature-desc">{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
