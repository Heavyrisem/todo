import { Injectable } from '@nestjs/common';
import { ICategory, ITodo } from '@shared/types/Todo';

@Injectable()
export class TodoService {
  getAllTodos() {
    const category: ICategory = {
      id: 1,
      name: 'Category 1',
      color: 'purple',
    };
    const todos: ITodo[] = [
      {
        id: 1,
        description: 'dummy description',
        lastModified: new Date(),
        category,
      },
      {
        id: 2,
        description: 'dummy description',
        lastModified: new Date(),
        category,
      },
    ];

    return todos;
  }
}
