import { RouterModule } from '@angular/router';
import { UsersListService } from 'src/app/services/users-list.service';
import { User } from './../../models/user.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  users: User[] = [];

  constructor(private usersListService: UsersListService,public router:RouterModule) { }

  ngOnInit(): void {
    this.usersListService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
