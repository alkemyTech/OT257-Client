import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../../../../core/services/activity/activities.service';
import { Activity } from '../../../../core/models/activity.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-activiy',
  templateUrl: './list-activiy.component.html',
  styleUrls: ['./list-activiy.component.scss']
})
export class ListActiviyComponent implements OnInit {

  data: Activity [] = [];

  constructor(private activitiesService: ActivitiesService,
              private router: Router) { }

  ngOnInit(): void {
    this.getActivity();
  }

  getActivity() {
    this.activitiesService.getActivity().then((result: any) => {
      this.data = result.data;

    });
  }
  
redirectView(id: number){
  this.router.navigate(['/activities', id]);
}

}
