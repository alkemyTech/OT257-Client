import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesModule} from '../features/features.module';
import { TituloComponent} from './titulo/titulo.component'




@NgModule({
  declarations: [
    TituloComponent,
  ],
  imports: [
    CommonModule,
    FeaturesModule
  ]
})
export class SharedModule { }
