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
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.prod';
import { NewsDetailComponent } from './pages/news/new-detail/new-detail.component';
import { ToysComponent } from './pages/landings/toys/toys.component';
import { NewsComponent } from './pages/news/news.component';
import { FooterComponent } from './pages/school-campaign/footer/footer.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    AuthFormComponent,
    ContactFormComponent,
    ActivitiesViewComponent,
    ToysComponent,
    NewsComponent,
    NewsDetailComponent,
    FooterComponent,
    ToysComponent
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
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ]
})
export class PublicModule { }
