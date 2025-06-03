import React from 'react';
import { SocialLogoProps } from '../icons/SocialLogoProps';

const MediumIconLogo: React.FC<SocialLogoProps> = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  className = '',
  title,
  ariaLabel = 'Medium icon logo',
  ariaLabelledby,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 130.52375 74.12875"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={ariaLabelledby ? undefined : ariaLabel}
      aria-labelledby={ariaLabelledby}
    >
      {title && <title>{title}</title>}
      <path
        d="m 73.62375,37.865 c 0,20.47 -16.48125,37.065 -36.8125,37.065 C 16.48,74.93 0,58.34 0,37.865 0,17.39 16.48125,0.80125 36.81125,0.80125 c 20.33,0 36.8125,16.59375 36.8125,37.06375 m 40.38375,0 c 0,19.27 -8.24125,34.89 -18.40625,34.89 -10.165,0 -18.40625,-15.625 -18.40625,-34.89 0,-19.265 8.24125,-34.89 18.40625,-34.89 10.165,0 18.40625,15.625 18.40625,34.89 m 16.5175,0 c 0,17.265 -2.89875,31.26 -6.47375,31.26 -3.575,0 -6.47375,-14 -6.47375,-31.26 0,-17.26 2.89875,-31.26 6.475,-31.26 3.57625,0 6.4725,13.99625 6.4725,31.26"
        fill={fill}
      />
    </svg>
  );
};

export default MediumIconLogo; 