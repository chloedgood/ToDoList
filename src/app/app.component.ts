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
      isEditing:false,
    },
    {
      task: 'Wash Dishes',
      completed: true,
      isEditing:false,
    },
    {
      task: 'Mop Floors',
      completed: false,
      isEditing:false,
    },
    {
      task: 'Water Plants',
      completed: true,
      isEditing:false,
    },
  ];


 // add to list function
 addTodo(todo:Todo):void {
  let taskName: string = (<HTMLInputElement> document.getElementById("AddInput")).value;

    let t : Todo = {task:taskName, completed:false, isEditing:false};

    this.todo.push(t);
 }


 //remove from list function
 //the second part of the splice is how many spaces forward to go
 removeTodo(i:number) {
this.todo.splice(i, 1);
}


//change completed value to true
completeTodo(i:number){
 this.todo[i].completed=true;
  };



EditToDo(i: number){
   let t: Todo = this.todo[i];
  //This is what's a called toggle in front end 
    t.isEditing = !t.isEditing;
  }

}
