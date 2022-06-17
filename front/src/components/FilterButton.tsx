import React from 'react';

import Filter from '@components/ui/Filter';

const FilterButton: React.FC = ({ ...rest }) => {
  return (
    <div className="box-border flex rounded-full bg-white p-4 shadow-bottom-item" {...rest}>
      <Filter className="h-4 w-4" />
    </div>
  );
};

export default FilterButton;
