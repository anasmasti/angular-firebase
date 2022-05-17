import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo.model';
import {
  addDoc,
  Firestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private firestore: Firestore) {}

  addTodo(todo: Todo) {
    let todosCollection = collection(this.firestore, 'todos');
    addDoc(todosCollection, todo);
  }

  async getTodoList() {
    let todosCollection = collection(this.firestore, 'todos');
    let todos: any[] = [];
    await getDocs(todosCollection).then((res) => {
      todos = [
        ...res.docs.map((todo) => {
          return { ...todo.data(), uid: todo.id };
        }),
      ];
    });
    return todos;
  }

  deleteTodo(id: string) {
    let selectedTodo = doc(this.firestore, 'todos', id);
    deleteDoc(selectedTodo);
  }
}
