import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './pages/auth/login-form/login-form.component';
import { RegisterFormComponent } from './pages/auth/register-form/register-form.component';
import { AuthFormComponent } from './pages/auth/auth-form/auth-form.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { ActivitiesViewComponent } from './pages/activities-view/activities-view.component';
import { HomeModule } from './pages/home/home.module';
import { AboutModule } from './pages/about/about.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PublicRoutingModule } from './public-routing.module';


@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    AuthFormComponent,
    ContactFormComponent,
    ActivitiesViewComponent,
  ],
  exports: [
    ContactFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    AboutModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }
