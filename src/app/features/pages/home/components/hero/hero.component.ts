import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/core/models/IOrganization';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() public organizationData!: Data;

  constructor() { }

  ngOnInit(): void {
    
  }

}
