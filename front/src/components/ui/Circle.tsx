import React from 'react';

import CircleSvg from '@icons/Circle';

export interface CircleProps extends React.BaseHTMLAttributes<HTMLSpanElement> {
  stroke?: string;
}

const Circle: React.FC<CircleProps> = ({ stroke, ...rest }) => {
  return (
    <span {...rest}>
      <CircleSvg stroke={stroke} />
    </span>
  );
};

export default Circle;
