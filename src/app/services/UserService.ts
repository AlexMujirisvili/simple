import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private data: User[] = [];


  constructor() {
    this.data.push(new User('123', 12, '2563'));
    this.data.push(new User('956', 13, '6523'));
  }
  getAll(): Observable<User[]> {
    return of(this.data);
  }

  add(username: string, age: number, description: string) {
    this.data.push(new User(username, age, description));
  }

  delete(user: User): void {
    this.data = this.data.filter(x => x.username !== user.username && x.age !== user.age && x.description !== user.description);
  }
}


