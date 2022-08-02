import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../core/services/loader/loader.service';
import { Subject } from 'rxjs';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  color: ThemePalette = 'primary';
  value = 50;
  mode : ProgressSpinnerMode =  'indeterminate';
  
  loading$ = this.loaderService.loading$;

  constructor( private loaderService: LoaderService) { }

  ngOnInit(): void {
   
  }

}
