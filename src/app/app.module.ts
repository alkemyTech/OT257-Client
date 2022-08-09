<<<<<<< HEAD
=======
import { CoreModule } from "./core/core.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
>>>>>>> eb5fb41f2ad3c2caf9e275cf27df17efbc16eb87


import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './state/app.state';
import { AuthEffects } from "./state/effects/auth.effects";
<<<<<<< HEAD
import { NewsEffects } from './state/effects/news.effects';
import { FeaturesModule } from "./features/features.module";
import { CoreModule } from "./core/core.module";
import { BrowserModule } from "@angular/platform-browser";
=======
import { UsersEffects } from "./state/effects/users.effects";
import { SliderEffect } from "./state/effects/slider.effects";
>>>>>>> eb5fb41f2ad3c2caf9e275cf27df17efbc16eb87
import { RouterModule } from "@angular/router";
import { FeaturesModule } from "./features/features.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    FeaturesModule,
    StoreModule.forRoot(ROOT_REDUCERS),
<<<<<<< HEAD
    EffectsModule.forRoot([AuthEffects,NewsEffects]),
    StoreDevtoolsModule.instrument({ }),
=======
    EffectsModule.forRoot([AuthEffects, UsersEffects, SliderEffect]),
    StoreDevtoolsModule.instrument({}),
>>>>>>> eb5fb41f2ad3c2caf9e275cf27df17efbc16eb87
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
