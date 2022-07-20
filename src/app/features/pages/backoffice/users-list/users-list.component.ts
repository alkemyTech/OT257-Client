import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: any[] = [
    { name: 'Juan Perez', email: 'mail@gmail.com' },
    { name: 'Martín Gonzalez', email: 'mail@gmail.com' },
    { name: 'Mario Mario', email: 'mail@gmail.com' },
    { name: 'Pedro Silva', email: 'mail@gmail.com' },
    { name: 'Luis Paco', email: 'mail@gmail.com' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
