import { Controller, Get } from '@nestjs/common';

import { TodoService } from './todo.service';

@Controller('/api/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodos() {
    return this.todoService.getAllTodos();
  }
}
