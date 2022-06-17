import React from 'react';

import Checkbox from '@components/ui/Checkbox';
import Circle from '@components/ui/Circle';
import { ITodo } from '@shared/types/Todo';

export interface TodoProps extends Pick<ITodo, 'description' | 'category'> {}

const Todo: React.FC<TodoProps> = ({ description, category }) => {
  return (
    <div className="m-1.5 flex w-5/6 rounded-2xl bg-white p-4 py-2.5">
      <Checkbox className="my-auto mr-2.5 h-[1.065rem] w-[1.065rem]" />
      <div className="text-stone-600">{description}</div>
      <Circle className="my-auto ml-auto mr-1.5 h-2.5 w-2.5" stroke={category.color} />
    </div>
  );
};

export default Todo;
