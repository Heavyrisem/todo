import React from 'react';

const CheckedBox = React.forwardRef<SVGSVGElement>((props, ref) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props} ref={ref}>
      <g id="그룹_3386" data-name="그룹 3386" transform="translate(-65 -39)">
        <rect
          id="사각형_489"
          data-name="사각형 489"
          width="24"
          height="24"
          rx="7"
          transform="translate(65 39)"
          fill="#e8e8e8"
        />
        <g id="그룹_3150" data-name="그룹 3150" transform="translate(-8145.787 -11015.398)">
          <path
            id="패스_3976"
            data-name="패스 3976"
            d="M8229.975,11063.073l-1.756-1.754-6.672,6.668-4.193-4.2-1.752,1.754,5.916,5.913.012,0,.035.028Z"
            transform="translate(-0.001 -0.001)"
            fill="#535453"
          />
        </g>
      </g>
    </svg>
  );
});

export default CheckedBox;
