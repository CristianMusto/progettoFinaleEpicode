import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login/login.component';
import { HomeComponent } from './components/home/home/home.component';
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { TableComponent } from './components/users/table/table.component';
import { LoginInterceptor } from './interceptor/login/login.interceptor';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { SignupComponent } from './components/singup/signup/signup.component';
import { FatturaComponent } from './components/fattura/fattura/fattura.component';
import { AddFatturaComponent } from './components/fattura/add-fattura/add-fattura.component';
import { ComuniComponent } from './components/comuni/comuni/comuni.component';
import { AddComuneComponent } from './components/comuni/addComune/add-comune/add-comune.component';
import { EditComuneComponent } from './components/comuni/edit-comune/edit-comune/edit-comune.component';
import { ProvinceComponent } from './components/province/province/province.component';
import { AddProvinciaComponent } from './components/province/addProvincia/add-provincia/add-provincia.component';
import { EditProvinciaComponent } from './components/province/editProvincia/edit-provincia/edit-provincia.component';
import { EditUserComponent } from './components/users/editUser/edit-user/edit-user.component';
import { EditFatturaComponent } from './components/fattura/editFattura/edit-fattura/edit-fattura.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    AddUserComponent,
    SignupComponent,
    FatturaComponent,
    AddFatturaComponent,
    ComuniComponent,
    AddComuneComponent,
    EditComuneComponent,
    ProvinceComponent,
    AddProvinciaComponent,
    EditProvinciaComponent,
    EditUserComponent,
    EditFatturaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AppRoutingModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
