import { ShoppingCart, ShieldCheck, Truck, Instagram, Twitter, Facebook } from 'lucide-react';
import './Footer.css';

const LINK_GROUPS = [
  { title: 'Shop', links: ['New Arrivals', 'Bestsellers', 'Tech & Gadgets', 'Fashion & Apparel'] },
  { title: 'Support', links: ['Help Center', 'Track Order', 'Returns & Refunds', 'Contact Us'] },
  { title: 'Company', links: ['About Us', 'Careers', 'Terms & Conditions', 'Privacy Policy'] },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo"><ShoppingCart size={24} color="var(--accent)" /> NovaMart</div>
            <p className="footer-desc">Curating the world's most premium products. From cutting-edge tech to high-end fashion, delivered to your doorstep.</p>
            <div className="social-links">
              <div className="social-icon"><Instagram size={18} /></div>
              <div className="social-icon"><Twitter size={18} /></div>
              <div className="social-icon"><Facebook size={18} /></div>
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="footer-title">{group.title}</h4>
              <ul className="footer-links">
                {group.links.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 NovaMart Premium. All rights reserved.</p>
          <div className="footer-badges"><ShieldCheck size={24} /> <Truck size={24} /></div>
        </div>
      </div>
    </footer>
  );
}
