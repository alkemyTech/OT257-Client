import { Component, OnInit } from '@angular/core';
import { Data, Organization } from 'src/app/core/models/IOrganization';
import { Staff } from 'src/app/core/models/members.model';
import { MembersService } from 'src/app/core/services/members/members.service';
import { OrgViewService } from 'src/app/core/services/org-view.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: ['']
})
export class AboutComponent implements OnInit {
  public organizationData!: Data;

  public staff!: Staff[]
  title = 'Nosotros';
  
  constructor(private orgSvc: OrgViewService, private membersSvc: MembersService) { }

  ngOnInit(): void {
    this.getOrganizationView();
    this.getMembers();
  }

  public getOrganizationView(): void {
    this.orgSvc.getorganizationData().subscribe({
      next: (res: Organization) => {
        this.organizationData = res.data;
      }
    });
  }

  public getMembers() {
    this.membersSvc.getMembers().subscribe({
      next: (res: any) => {
        this.staff = res.data;
      }
    });
  }

}
