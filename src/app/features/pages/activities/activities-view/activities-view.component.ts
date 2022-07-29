import { Component, OnInit } from '@angular/core';
import {ActivitiesService} from '../../../../core/services/activity/activities.service';

@Component({
  selector: 'app-activities-view',
  templateUrl: './activities-view.component.html',
  styleUrls: ['./activities-view.component.scss']
})
export class ActivitiesViewComponent implements OnInit {
  activityObject: any;
  listActivities:any;

  constructor(private activityService:ActivitiesService) { }

  ngOnInit(): void {
    this.activityService. getActivity().subscribe(
     (data)=>{
        this.activityObject = data;
        this.listActivities = this.activityObject.data;
      }
    )

  }

}
