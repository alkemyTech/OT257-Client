import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { ROOT_REDUCERS } from "./state/app.state";
import { AuthEffects } from "./state/effects/auth.effects";
import { NewsEffects } from "./state/effects/news.effects";
import { FeaturesModule } from "./features/features.module";
import { CoreModule } from "./core/core.module";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    FeaturesModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([AuthEffects, NewsEffects]),
    StoreDevtoolsModule.instrument({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
