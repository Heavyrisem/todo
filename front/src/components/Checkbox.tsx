import React, { useCallback, useState } from 'react';

import CheckedBox from '@icons/CheckedBox';
import UnCheckedBox from '@icons/UnCheckedBox';

export interface CheckboxProps extends Omit<React.BaseHTMLAttributes<HTMLSpanElement>, 'onChange'> {
  checked?: boolean;
  onChange?: (event: React.MouseEvent<HTMLSpanElement>, value: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, ...rest }) => {
  const [check, setCheck] = useState(checked ?? false);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>) => {
      e.preventDefault();
      const newValue = !check;
      setCheck(newValue);
      onChange?.(e, newValue);
    },
    [check, onChange],
  );

  return (
    <span className="cursor-pointer select-none" onClick={handleClick} {...rest}>
      {check ? <CheckedBox /> : <UnCheckedBox />}
    </span>
  );
};

export default Checkbox;
