import { Component } from '@angular/core';
import { Task } from '../../../model';
import { DEFAULT_TASK } from '../../../data';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  toDo: Task[] =  DEFAULT_TASK

  handleDeleteTask = (id: number) => {
    this.toDo = this.toDo.filter(task => task.id !== id)
  }
}
