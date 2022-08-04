import { Component, Input, OnInit } from "@angular/core";
import { Staff } from "src/app/core/models/members.model";

@Component({
  selector: "app-staff-list",
  templateUrl: './staff-list.component.html',
  styleUrls: ["./staff-list.component.scss"],
})
export class StaffListComponent implements OnInit {
  @Input() staff_list!: Staff[];
  constructor() {}

  ngOnInit(): void {}
}
