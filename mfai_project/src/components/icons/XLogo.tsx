import React from 'react';
import { LucideProps } from 'lucide-react';

const XLogo = React.forwardRef<SVGSVGElement, LucideProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  className = '',
  'aria-label': ariaLabel = 'X logo',
  ...props
}, ref) => {
  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 300 300.251"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={ariaLabel}
      {...props}
    >
      <path
        d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"
        fill={color}
      />
    </svg>
  );
});

XLogo.displayName = 'XLogo';

export default XLogo; 