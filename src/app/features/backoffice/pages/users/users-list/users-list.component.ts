import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subject } from "rxjs";
import { debounceTime, map } from "rxjs/operators";
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
  private subjectKeyUp = new Subject<any>();
  userFilter!: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectUsersLoading);

    this.store.dispatch(loadUsers());

    this.users$ = this.store.select(selectUsersList);
  }

  deleteUser(id: string) {
    this.store.dispatch(deleteUser({ id }));
  }

  searchUser($event: any) {
    this.subjectKeyUp.next($event.target.value);
    this.subjectKeyUp.pipe(
      debounceTime(500)
    ).subscribe((inputValue) => {
      this.userFilter = inputValue.toLowerCase();
      if (this.userFilter.length > 0) {
        this.users$ = this.store.select(selectUsersList).pipe(
          map((users) => users.filter((user) => user.name.match(this.userFilter)))
        );
      } else {
        this.store.dispatch(loadUsers());
      }
    });
  }









}
