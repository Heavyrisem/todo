import React, { useEffect } from 'react';

import useSWR from 'swr';

import CreateNewTask from '@components/CreateNewTask';
import FilterButton from '@components/FilterButton';
import Todo from '@components/Todo';
import { ITodo } from '@shared/types/Todo';

import fetcher from './helper/fetcher';

const Main: React.FC = () => {
  const { data: todos, error } = useSWR<ITodo[]>('/api/todo', fetcher);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      {todos && todos.map((todo) => <Todo key={todo.id} {...todo} />)}
      <div className="absolute bottom-8 flex space-x-4">
        <CreateNewTask />
        <FilterButton />
      </div>
    </div>
  );
};

export default Main;
