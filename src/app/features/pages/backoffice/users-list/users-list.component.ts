import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { User } from "src/app/core/models/user.model";
import { UsersService } from "src/app/core/services/users/users.service";
import { retrievedUsersList } from "src/app/state/actions/users.action";
import { selectUsers } from "src/app/state/selectors/users.selector";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
})
export class UsersListComponent implements OnInit {
  users$: Observable<any> = new Observable();

  constructor(private usersService: UsersService, private store: Store) {
    this.users$ = this.store.select(selectUsers);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe((response) => {
      this.store.dispatch(retrievedUsersList({ users: response.data }));
    });
  }
}
