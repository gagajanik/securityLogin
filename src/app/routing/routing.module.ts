import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../components/login/login.component';
import {AppComponent} from '../app.component';
import {HomeComponent} from '../components/home/home/home.component';


const routes132: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes132)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
