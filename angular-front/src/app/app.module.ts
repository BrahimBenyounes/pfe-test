import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';

import {
  NgbModal,
  NgbModalModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StockComponent } from './stock/stock.component';
import { ReglementComponent } from './reglement/reglement.component';
import { SecteurActiviteComponent } from './secteur-activite/secteur-activite.component';
import { OperateurComponent } from './operateur/operateur.component';
import { FactureComponent } from './facture/facture.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LocalComponent } from './local/local.component';
import { VaccineComponent } from './vaccine/vaccine.component';
import { TypevaccineComponent } from './typevaccine/typevaccine.component';
import { SterilizationComponent } from './sterilization/sterilization.component';
import { VeterinarianComponent } from './veterinarian/veterinarian.component';
import { RewardComponent } from './reward/reward.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';





@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    StockComponent,
    ReglementComponent,
    SecteurActiviteComponent,
    OperateurComponent,
    FactureComponent,
    NavbarComponent,
    LocalComponent,
    VaccineComponent,
    TypevaccineComponent,
    SterilizationComponent,
    VeterinarianComponent,
    RewardComponent,
    PageDashboardComponent,
    SidebarComponent,
    LoginComponent,
    SignupComponent,
   
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModalModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
