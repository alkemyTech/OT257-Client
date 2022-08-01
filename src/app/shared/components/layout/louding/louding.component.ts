import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-louding',
  templateUrl: './louding.component.html',
  styleUrls: ['./louding.component.scss']
})
export class LoudingComponent implements OnInit {
  @Input()  spinner!: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
