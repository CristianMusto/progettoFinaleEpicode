import { LoginGuard } from './guards/login/login.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/login/login/login.component';
import { TableComponent } from './components/users/table/table.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { SignupComponent } from './components/singup/signup/signup.component';
import { SignupGuard } from './guards/signup/signup.guard';
import { FatturaComponent } from './components/fattura/fattura/fattura.component';
import { AddFatturaComponent } from './components/fattura/add-fattura/add-fattura.component';
import { ComuniComponent } from './components/comuni/comuni/comuni.component';
import { AddComuneComponent } from './components/comuni/addComune/add-comune/add-comune.component';
import { ProvinceComponent } from './components/province/province/province.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'table', 
    component: TableComponent, 
    canActivate: [LoginGuard]
  },
  {
    path:"table/page/:page",
    component: TableComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"signup",
    component: SignupComponent,
    canActivate: [SignupGuard]
  },
  {
    path:"fattura/cliente/:id/page/:page",
    component: FatturaComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"comuni",
    component: ComuniComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"province",
    component: ProvinceComponent,
    canActivate: [LoginGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
