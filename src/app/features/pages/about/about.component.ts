import { Component, OnInit } from '@angular/core';
import { Data, Organization } from 'src/app/core/models/IOrganization';
import { OrgViewService } from 'src/app/core/services/org-view.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: ['']
})
export class AboutComponent implements OnInit {
  public organizationData!: Data;
  title = 'Nosotros';
  
  constructor(private orgSvc: OrgViewService) { }

  ngOnInit(): void {
    this.getOrganizationView();
  }

  public getOrganizationView(): void {
    this.orgSvc.getorganizationData().subscribe({
      next: (res: Organization) => {
        this.organizationData = res.data;
      }
    });
  }

}
