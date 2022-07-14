import { Component, OnInit } from '@angular/core';
import { OrgViewService } from '../../../../core/services/org-view.service';
import { Organization,Data } from 'src/app/core/models/IOrganization';

@Component({
  selector: 'app-org-view',
  templateUrl: './org-view.component.html',
  styleUrls: ['./org-view.component.scss']
})
export class OrgViewComponent implements OnInit {

  public orgData: any;

  constructor(private orgService: OrgViewService) { }

  ngOnInit(): void {
    this.getOrganizationView();
  }

  public getOrganizationView(): void {
    this.orgService.getOrgData().subscribe({
      next: (response: Organization) => {
        this.orgData = response.data;
        console.log(this.orgData);
        
      },
      error: (err) => {
        console.log(err);
      }
    });

    }
      
   
  }


