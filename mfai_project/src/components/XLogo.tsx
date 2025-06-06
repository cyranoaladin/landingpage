import React from 'react';

interface XLogoProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
}

const XLogo: React.FC<XLogoProps> = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  className = '',
  title,
  ariaLabel = 'X logo',
  ariaLabelledby,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 300 300.251"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={ariaLabelledby ? undefined : ariaLabel}
      aria-labelledby={ariaLabelledby}
    >
      {title && <title>{title}</title>}
      <path
        d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"
        fill={fill}
      />
    </svg>
  );
};

export default XLogo; 