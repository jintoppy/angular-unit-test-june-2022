import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  users: User[] = [
    {username: 'u1', name: 'abc'},
    {username: 'u2', name: 'abcdef'}
  ]
  constructor() { }

  getUser(username:string): User | undefined {
    return this.users.find(u => u.username === username);
  }
}
