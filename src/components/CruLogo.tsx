import React from 'react';

interface CruLogoProps {
  className?: string;
  variant?: 'orange-on-white' | 'white-on-orange' | 'dark' | 'orange-fill';
  size?: number;
}

export const CruLogo: React.FC<CruLogoProps> = ({
  className = 'w-10 h-10',
  variant = 'orange-on-white',
  size,
}) => {
  const isWhiteOnOrange = variant === 'white-on-orange';
  const isDark = variant === 'dark';
  const isOrangeFill = variant === 'orange-fill';

  const strokeColor = isWhiteOnOrange ? '#FFFFFF' : isDark ? '#141413' : '#FF4D00';
  const dotColor = strokeColor;
  const bgColor = isWhiteOnOrange ? '#FF4D00' : isOrangeFill ? '#FF4D00' : 'transparent';

  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={size ? { width: size, height: size } : undefined}
      aria-label="CRÜ Communications Logo"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background if white-on-orange variant or orange-fill */}
        {(isWhiteOnOrange || isOrangeFill) && (
          <rect width="100" height="100" rx="28" fill={bgColor} />
        )}

        {/* Hand-drawn organic rounded contour */}
        <path
          d="M 50,11 
             C 68,10.5 83,18 87,35 
             C 90,52 89,70 82,82 
             C 74,93 58,92.5 44,91 
             C 28,89.5 13,82 13,63 
             C 13,44 17,21 34,14 
             C 39,12 45,11.2 50,11 Z"
          stroke={strokeColor}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Two umlaut dots / smiley eyes */}
        <circle cx="39" cy="36" r="5.5" fill={dotColor} />
        <circle cx="61" cy="36" r="5.5" fill={dotColor} />

        {/* Bold U smile curve */}
        <path
          d="M 33 46 
             L 33 60 
             C 33 73.5 41 78.5 50 78.5 
             C 59 78.5 67 73.5 67 60 
             L 67 46"
          stroke={strokeColor}
          strokeWidth="8.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
};
