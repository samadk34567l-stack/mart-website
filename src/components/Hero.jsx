import { ChevronRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">Summer Collection 2026</div>
        <h1 className="hero-title">Elevate Your Lifestyle.</h1>
        <p className="hero-desc">Discover our curated selection of premium electronics, fashion, and home essentials. Uncompromising quality for the modern individual.</p>
        <button className="hero-btn">Shop Now <ChevronRight size={20} /></button>
      </div>
    </section>
  );
}
