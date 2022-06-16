import React from 'react';

const UnCheckedBox = React.forwardRef<SVGSVGElement>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
      ref={ref}
    >
      <rect id="사각형_490" data-name="사각형 490" width="24" height="24" rx="7" fill="#e8e8e8" />
    </svg>
  );
});

export default UnCheckedBox;
