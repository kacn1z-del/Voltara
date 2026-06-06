import React from "react";

const Logo = ({ size = 32 }) => (
  <svg width={size} height={size * 0.78} viewBox="0 0 120 94">
    <defs>
      <linearGradient id="gl" x1="0" y1="0" x2="120" y2="94">
        <stop offset="0%" stopColor="#5bcff8"/>
        <stop offset="100%" stopColor="#0077ff"/>
      </linearGradient>
      <linearGradient id="gr" x1="120" y1="0" x2="0" y2="94">
        <stop offset="0%" stopColor="#ffc107"/>
        <stop offset="100%" stopColor="#ff6b00"/>
      </linearGradient>
    </defs>
    <polygon points="2,4 50,4 60,46 28,90" fill="url(#gl)"/>
    <polygon points="118,4 70,4 60,46 92,90" fill="url(#gr)"/>
    <polygon points="28,90 60,46 92,90 60,68" fill="#ffffff"/>
  </svg>
);

export default Logo;