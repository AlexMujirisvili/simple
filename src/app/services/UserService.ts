import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private data: User[] = [];

    getAll(): Observable<User[]> {

        this.data.push(new User("123", 12, "2563"));
        this.data.push(new User("956", 13, "6523"));

        return of(this.data);
    }
}


