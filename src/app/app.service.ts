import { Injectable } from '@angular/core';
import { User } from './models/user';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  constructor(private http: HttpClient) { }

  getUser(username:string): Observable<User | undefined> {
    return this.http
                .get<User[]>('https://jsonplaceholder.typicode.com/users')
                .pipe(
                  map((users: User[]) => {
                    return users.find(u => u.username === username);
                  })
                );

  }
}
