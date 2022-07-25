import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/core/models/IOrganization';
import { NewModel } from 'src/app/core/models/new.model'; 

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() public news!: NewModel[];
  @Input() public organizationData!: Data;

  constructor() { }

  ngOnInit(): void {
  }

}
