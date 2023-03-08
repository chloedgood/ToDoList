import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoListAssignment';
  todolist: Todo[] = [];
  completedTodos: Todo[] = [];

  todo : Todo [] = [
    {
      task: 'Fold Laundry',
      completed: false,
    },
    {
      task: 'Wash Dishes',
      completed: true,
    },
    {
      task: 'Mop Floors',
      completed: false,
    },
    {
      task: 'Water Plants',
      completed: true,
    },
  ];

 // add to list function
 addTodo(todo:Todo):void {
  this.todolist = [...this.todolist, todo];
 }

 //remove from list function
 removeTodo(todoIn: string): void {
  console.log('removeTodo: ' + todoIn);
  let index = 0;

this.todolist.map((todo, i) => {
if (todo.task === todoIn) {
  index = i;
}
return index;
});
this.todolist.splice(index, 1);
}

//change completed value to true
completeTodo(todo: string, i: number): void {
  let tempTodo = {
    task: todo,
    completed: true,
  };

 console.log(this.todolist[i]);

this.todolist[i].completed = !this.todolist[i].completed;

this.completedTodos = [...this.completedTodos, tempTodo];
}


}
