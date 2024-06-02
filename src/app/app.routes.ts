import { Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {DashboardHomeComponent} from "./components/dashboard-home/dashboard-home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {dashboardUserGuard} from "./guards/dashboard-user.guard";
import {RoleGuard} from "./guards/role.guard";

export const routes: Routes = [

  {path:'',redirectTo:'/dashboard/home',pathMatch:'full'},

  {
    path:'dashboard',component:DashboardComponent,children:[
      {path:'',redirectTo:'/dashboard/home',pathMatch:'full'},
      {path:'home',component:DashboardHomeComponent},
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {
        path: 'user', loadComponent:
          () => import('./components/dashboard-user/dashboard-user.component')
            .then(e=>e.DashboardUserComponent),canActivate:[RoleGuard,dashboardUserGuard],data: { expectedRole: 'admin' }
      },
      { path: 'teachers', loadComponent:
          () => import('./components/dashboard-teachers/dashboard-teachers.component')
            .then(e=>e.DashboardTeachersComponent), canActivate: [RoleGuard,dashboardUserGuard], data: { expectedRole: 'teacher' }
      },
    ]
  }


];
