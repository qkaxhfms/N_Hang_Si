import React from 'react';

const ArrowSvg = () => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
    >
      <rect width="10" height="10" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0" transform="scale(0.00666667)" />
        </pattern>
        <image
          id="image0"
          width="150"
          height="150"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default ArrowSvg;