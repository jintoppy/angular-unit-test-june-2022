import { Component } from '@angular/core';
import { AppService } from './app.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-unit-test';
  user?:User;

  constructor(private appService: AppService){

  }

  ngOnInit(){
    this.user = this.appService.getUser('u1');
  }

  changeTitle(){
    this.title = 'title-changed';
  }
}
