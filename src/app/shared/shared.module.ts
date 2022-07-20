import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent} from './titulo/titulo.component'




@NgModule({
  declarations: [
    TituloComponent,
  ],
  exports: [TituloComponent],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
