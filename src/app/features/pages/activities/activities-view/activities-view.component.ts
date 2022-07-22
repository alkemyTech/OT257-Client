import { Component, OnInit } from '@angular/core';
import {ActivitiesService} from '../../../../core/services/activity/activities.service';

@Component({
  selector: 'app-activities-view',
  templateUrl: './activities-view.component.html',
  styleUrls: ['./activities-view.component.scss']
})
export class ActivitiesViewComponent implements OnInit {
  listActivities:any;

  constructor(private activityService:ActivitiesService) { }

  ngOnInit(): void {
    this.activityService.getListActivity().subscribe({
      next: (data)=>{
        console.log(data);
        this.listActivities = data.data;
      },error: (error)=>{
        console.log(error);
      }
    })

  }

}
