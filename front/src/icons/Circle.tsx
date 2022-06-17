import React from 'react';

interface CircleProps extends React.SVGProps<SVGSVGElement> {
  strokeWidth?: number;
}

const Circle = React.forwardRef<SVGSVGElement, CircleProps>(({ strokeWidth, ...rest }, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      overflow="visible"
      {...rest}
      ref={ref}
    >
      <g id="타원_46" data-name="타원 46" fill="none" strokeWidth="5">
        <circle cx="12" cy="12" r="12" stroke="none" />
        <circle cx="12" cy="12" r="10.5" fill="none" />
      </g>
    </svg>
  );
});

export default Circle;
