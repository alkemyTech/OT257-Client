import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { LoaderService } from "../core/services/loader/loader.service";
import { LoaderInterceptor } from "../core/services/loader/loader.interceptor";
import { SharedModule } from "../shared/shared.module";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { PublicModule } from "./public/public.module";
import { BackofficeModule } from "./backoffice/backoffice.module";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    SweetAlert2Module.forRoot(),
    SweetAlert2Module,
    SweetAlert2Module.forChild({ /* options */ }),
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
})
export class FeaturesModule {}
