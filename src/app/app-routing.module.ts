import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesskeySecretkeyComponent } from './accesskey-secretkey/accesskey-secretkey.component';
import { HomeComponent } from './home/home.component';
import { DrawComponent } from './landing/draw/draw.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'draw', component: HomeComponent
  },
  {
    path: 'landing', component: LandingComponent
  },
  {
    path: 'accesskey', component: AccesskeySecretkeyComponent
  },
  {
    path: 'login', component: LoginComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
