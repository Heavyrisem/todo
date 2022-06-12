import Todo from '@components/Todo';
import { ITodo } from '@shared/types/Todo';
import React, { useEffect } from 'react';
import useSWR from 'swr';

import fetcher from './helper/fetcher';

const Main: React.FC = () => {
  const { data: todos, error } = useSWR<ITodo[]>('/api/todo', fetcher);

  return (
    <div>
      <h1>Todos</h1>
      {todos && todos.map((todo) => <Todo key={todo.id} {...todo} />)}
    </div>
  );
};

export default Main;
