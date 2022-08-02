import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { User } from "src/app/core/models/user.model";
import { UsersService } from "src/app/core/services/users/users.service";
import { loadedUsers, loadUsers } from "src/app/state/actions/users.action";
import { AppState } from "src/app/state/app.state";
import {
  selectUsersList,
  selectUsersLoading,
} from "src/app/state/selectors/users.selector";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
})
export class UsersListComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();
  users$: Observable<any> = new Observable();

  constructor(private usersService: UsersService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectUsersLoading);

    this.store.dispatch(loadUsers());

    this.users$ = this.store.select(selectUsersList);
  }
}
