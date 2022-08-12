import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './page/about.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StaffListComponent } from './staff-list/staff-list.component';

@NgModule({
  declarations: [AboutComponent, StaffListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AboutModule { }
