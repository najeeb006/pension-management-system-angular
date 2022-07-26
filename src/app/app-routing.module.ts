import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/services/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PensionStatusComponent } from './components/pension-status/pension-status.component';
import { PensionerInputComponent } from './components/pensioner-input/pensioner-input.component';
import { PensionerListComponent } from './components/pensioner-list/pensioner-list.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent,pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent,pathMatch:'full'
  },
  {
    path:'pensionerlist',component:PensionerListComponent,pathMatch:'full',canActivate:[AuthGuard]
  },
  {
    path:'pensionCalculation',component:PensionerInputComponent,pathMatch:'full',canActivate:[AuthGuard]
  },
  {
    path:'pensionStatus',component:PensionStatusComponent,pathMatch:'full',canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
