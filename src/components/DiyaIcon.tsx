import React from 'react';

interface DiyaProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

export const DiyaIcon: React.FC<DiyaProps> = ({ 
  className = '', 
  size = 'md',
  animated = true 
}) => {
  const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${sizeMap[size]} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          {/* Flame Gradient */}
          <radialGradient id="flameGlow" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#FFF7D6" />
            <stop offset="35%" stopColor="#FFD36A" />
            <stop offset="70%" stopColor="#F28C28" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          
          <linearGradient id="flameBody" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#FFF1D5" />
            <stop offset="60%" stopColor="#FFD36A" />
            <stop offset="100%" stopColor="#F28C28" />
          </linearGradient>

          {/* Diya Clay / Brass Bowl */}
          <linearGradient id="bowlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD36A" />
            <stop offset="30%" stopColor="#E67E22" />
            <stop offset="70%" stopColor="#B33924" />
            <stop offset="100%" stopColor="#4A071D" />
          </linearGradient>

          {/* Golden Rim */}
          <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFF1D5" />
            <stop offset="50%" stopColor="#FFD36A" />
            <stop offset="100%" stopColor="#E67E22" />
          </linearGradient>
        </defs>

        {/* Ambient Halo behind flame */}
        <circle cx="50" cy="38" r="30" fill="url(#flameGlow)" opacity="0.5" className={animated ? "animate-pulse" : ""} />

        {/* Flickering Flame */}
        <g className={animated ? "animate-diya-flicker origin-bottom" : ""}>
          {/* Outer flame */}
          <path
            d="M50 14 C56 26, 64 36, 64 45 C64 54, 57 59, 50 59 C43 59, 36 54, 36 45 C36 36, 44 26, 50 14 Z"
            fill="url(#flameBody)"
          />
          {/* Inner white-hot core */}
          <path
            d="M50 28 C53 34, 58 40, 58 46 C58 51, 54 54, 50 54 C46 54, 42 51, 42 46 C42 40, 47 34, 50 28 Z"
            fill="#FFFBE8"
          />
        </g>

        {/* Diya Base Clay / Brass Pot */}
        <path
          d="M16 58 C18 78, 33 87, 50 87 C67 87, 82 78, 84 58 C68 64, 32 64, 16 58 Z"
          fill="url(#bowlGradient)"
          stroke="#FFD36A"
          strokeWidth="1.8"
        />

        {/* Diya Rim Oval with ornamental carvings */}
        <ellipse
          cx="50"
          cy="58"
          rx="34"
          ry="7"
          fill="#4A071D"
          stroke="url(#goldRim)"
          strokeWidth="2"
        />

        {/* Ornamental beads on rim */}
        <circle cx="28" cy="58" r="1.5" fill="#FFD36A" />
        <circle cx="39" cy="61" r="1.5" fill="#FFD36A" />
        <circle cx="50" cy="62" r="2" fill="#FFF1D5" />
        <circle cx="61" cy="61" r="1.5" fill="#FFD36A" />
        <circle cx="72" cy="58" r="1.5" fill="#FFD36A" />

        {/* Diya Pedestal Stand */}
        <path
          d="M40 86 L38 92 C38 94, 62 94, 62 92 L60 86 Z"
          fill="#B33924"
          stroke="#FFD36A"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
};

export default DiyaIcon;
