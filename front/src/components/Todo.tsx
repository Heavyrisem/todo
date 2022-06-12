import { ITodo } from '@shared/types/Todo';
import React from 'react';

export interface TodoProps extends Pick<ITodo, 'title' | 'description'> {}

const Todo: React.FC<TodoProps> = ({ title, description }) => {
  return (
    <div className="rounded drop-shadow w-1/5 m-2 inline-block">
      <div>{title}</div>
      <div className="text-stone-700">{description}</div>
    </div>
  );
};

export default Todo;
