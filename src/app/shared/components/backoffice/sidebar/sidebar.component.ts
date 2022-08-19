import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { logOut } from "src/app/state/actions/auth.actions";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  show: boolean = false;
  constructor(private store: Store) {}

  ngOnInit(): void {}

  logout() {
    this.store.dispatch(logOut());
  }
}
