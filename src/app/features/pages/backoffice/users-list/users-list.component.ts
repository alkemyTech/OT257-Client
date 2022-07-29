import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: any[] = []

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    /* this.usersService.getUsersFromApi().subscribe({
      next: (response: any) => {
        this.users = response.data
      }
    }) */
  }

}
