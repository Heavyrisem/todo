import { Injectable } from '@nestjs/common';
import { ITodo } from '@shared/types/Todo';

@Injectable()
export class TodoService {
  getAllTodos() {
    const todos: ITodo[] = [
      {
        id: 1,
        title: 'dummy',
        description: 'dummy description',
        lastModified: new Date(),
      },
    ];

    return todos;
  }
}
