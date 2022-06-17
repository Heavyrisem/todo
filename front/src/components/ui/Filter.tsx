import React from 'react';

import FilterSvg from '@icons/Filter';

interface FilterProps extends React.BaseHTMLAttributes<HTMLDivElement> {}

const Filter: React.FC<FilterProps> = ({ ...rest }) => {
  return (
    <div className="rounded-full bg-white p-4 shadow-bottom-item" {...rest}>
      <FilterSvg />
    </div>
  );
};

export default Filter;
