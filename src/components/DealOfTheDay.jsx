import { useState, useEffect } from 'react';
import './DealOfTheDay.css';

const pad = (n) => String(n).padStart(2, '0');

export default function DealOfTheDay() {
  const [timeLeft, setTimeLeft] = useState({ h: 5, m: 30, s: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.h === 0 && prev.m === 0 && prev.s === 0) return { h: 24, m: 0, s: 0 };
        let s = prev.s - 1;
        let m = prev.m;
        let h = prev.h;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="deal-section">
      <div className="deal-content">
        <span className="deal-badge">Deal of the Day</span>
        <h2 className="deal-title">Bose QuietComfort Ultra</h2>
        <p className="deal-desc">Experience world-class noise cancellation and spatial audio for an immersive listening experience. Save 30% today only.</p>

        <div className="timer-box">
          <div className="time-block">
            <span className="time-val">{pad(timeLeft.h)}</span>
            <span className="time-label">Hours</span>
          </div>
          <div className="time-block">
            <span className="time-val">{pad(timeLeft.m)}</span>
            <span className="time-label">Mins</span>
          </div>
          <div className="time-block">
            <span className="time-val">{pad(timeLeft.s)}</span>
            <span className="time-label">Secs</span>
          </div>
        </div>

        <button className="deal-btn">Claim Deal Now</button>
      </div>
      <div className="deal-img-wrapper">
        <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop" alt="Deal" className="deal-img" />
      </div>
    </section>
  );
}
