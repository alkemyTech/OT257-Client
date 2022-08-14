import { Component, OnInit } from "@angular/core";
import { Data } from "src/app/core/models/IOrganization";
import { OrgViewService } from "src/app/core/services/org-view.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  orgData!: Data;
  constructor(private orgSvc: OrgViewService) {}

  ngOnInit(): void {
    this.orgSvc
      .getorganizationData()
      .pipe()
      .subscribe((res) => {
        this.orgData = res.data;
      });
  }
}
