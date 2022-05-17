import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoForm!: FormGroup;
  todos!: any[];

  constructor(public fb: FormBuilder, private todoApi: TodoService) {}
  ngOnInit(): void {
    this.initTodoForm();
    this.getTodoList();
  }

  initTodoForm() {
    this.todoForm = this.fb.group({
      todo: ['', [Validators.required]],
    });
  }

  addTodo() {
    this.todoApi.addTodo(this.todoForm.value);
    this.todoForm.reset();
    this.getTodoList();
  }

  getTodoList() {
    this.todoApi.getTodoList().then((todos) => {
      this.todos = todos;
    });
  }

  deleteTodo(id: any) {
    this.todoApi.deleteTodo(id);
    this.getTodoList();
  }
}
