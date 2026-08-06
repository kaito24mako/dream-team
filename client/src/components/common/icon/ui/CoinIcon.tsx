function CoinIcon({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
      aria-label="Coin"
    >
      <defs>
        <radialGradient id="gold" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#FFF9C4" />
          <stop offset="18%" stopColor="#FFE082" />
          <stop offset="45%" stopColor="#FFD54F" />
          <stop offset="70%" stopColor="#F9A825" />
          <stop offset="100%" stopColor="#C17900" />
        </radialGradient>

        <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF3B0" />
          <stop offset="25%" stopColor="#FFD54F" />
          <stop offset="55%" stopColor="#FBC02D" />
          <stop offset="100%" stopColor="#A66A00" />
        </linearGradient>

        <linearGradient id="letter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF6BF" />
          <stop offset="40%" stopColor="#FFD54F" />
          <stop offset="100%" stopColor="#B97800" />
        </linearGradient>

        <linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.8" />
          <stop offset="40%" stopColor="white" stopOpacity="0.15" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        <filter id="shadow">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodOpacity="0.35" />
        </filter>

        <polygon
          id="star"
          points="0,-12 3.5,-3.5 12,-3.5 5.5,2.5 8,11 0,6 -8,11 -5.5,2.5 -12,-3.5 -3.5,-3.5"
        />
      </defs>

      <g filter="url(#shadow)">
        <circle
          cx="256"
          cy="256"
          r="245"
          fill="url(#ring)"
          stroke="#8B5A00"
          strokeWidth="5"
        />

        <circle
          cx="256"
          cy="256"
          r="215"
          fill="none"
          stroke="#E9B530"
          strokeWidth="18"
        />

        <circle
          cx="256"
          cy="256"
          r="175"
          fill="url(#gold)"
          stroke="#C89010"
          strokeWidth="4"
        />

        <g fill="#FFE082" stroke="#A66A00" strokeWidth="2">
          <use href="#star" transform="translate(256 62)" />
          <use href="#star" transform="translate(352 90)" />
          <use href="#star" transform="translate(422 160)" />
          <use href="#star" transform="translate(450 256)" />
          <use href="#star" transform="translate(422 352)" />
          <use href="#star" transform="translate(352 422)" />
          <use href="#star" transform="translate(256 450)" />
          <use href="#star" transform="translate(160 422)" />
          <use href="#star" transform="translate(90 352)" />
          <use href="#star" transform="translate(62 256)" />
          <use href="#star" transform="translate(90 160)" />
          <use href="#star" transform="translate(160 90)" />
        </g>

        <g transform="translate(256 265)">
          <path
            d="M-82-72
           H-10
           C60-72 60 72 -10 72
           H-82
           Z
           M-46-38
           H-12
           C22-38 22 38 -12 38
           H-46
            Z"
            fill="url(#letter)"
            stroke="#8B5A00"
            strokeWidth="6"
          />

          <path
            d="M-6-70
           H88
           V-34
           H54
           V72
           H16
           V-34
           H-6
            Z"
            fill="url(#letter)"
            stroke="#8B5A00"
            strokeWidth="6"
          />
        </g>

        <ellipse
          cx="195"
          cy="170"
          rx="170"
          ry="95"
          fill="url(#shine)"
          transform="rotate(-25 195 170)"
        />
      </g>
    </svg>
  );
}
export default CoinIcon;
