import React from "react";

const Logo = ({ size = 32 }) => (
  <svg width={size} height={size * 0.78} viewBox="0 0 120 93" fill="none">
    <defs>
      <linearGradient id="gl" x1="0" y1="0" x2="55" y2="93" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#5bcff8"/><stop offset="55%" stopColor="#1565c0"/><stop offset="100%" stopColor="#0a2070"/>
      </linearGradient>
      <linearGradient id="gr" x1="120" y1="0" x2="65" y2="93" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffc107"/><stop offset="50%" stopColor="#f4511e"/><stop offset="100%" stopColor="#b71c1c"/>
      </linearGradient>
    </defs>
    <polygon points="2,4 50,4 60,46 28,90" fill="url(#gl)"/>
    <polygon points="118,4 70,4 60,46 92,90" fill="url(#gr)"/>
    <polygon points="28,90 60,46 92,90 60,68" fill="#08144a" opacity="0.32"/>
  </svg>
);

export default Logo;
