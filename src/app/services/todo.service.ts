import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo.model';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todo!: AngularFirestoreDocument<any>;
  todos!: any;

  constructor(private db: AngularFirestore) {}

  addTodo(todo: Todo) {
    const todoRef = this.db.doc('todo');
    todoRef.set(todo);
  }

  getTodoList() {
    this.todo = this.db.doc('todo');
    return this.todo
  }

  updateTodo(id: any, todo: Todo) {
    const todoRef = this.db.doc('todo');
    todoRef.update(todo);
  }

  deleteTodo(id: string) {
    const todoRef = this.db.doc('todo');
    todoRef.delete();
  }
}
