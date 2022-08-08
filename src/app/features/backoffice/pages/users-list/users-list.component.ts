import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { loadUsers, deleteUser } from "src/app/state/actions/users.action";
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

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectUsersLoading);

    this.store.dispatch(loadUsers());

    this.users$ = this.store.select(selectUsersList);
  }

  deleteUser(id: string) {
    this.store.dispatch(deleteUser({ id }));
  }
}
