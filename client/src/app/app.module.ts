import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';


import { AppComponent } from './app.component';
import { ListFarmaProdComponent } from './views/farma/list-farma-prod/list-farma-prod.component';
import { ListFarmaComponent } from './views/farma/list-farma/list-farma.component';
import { CreateFarmaComponent } from './views/farma/create-farma/create-farma.component';
import { CreateProdutoComponent } from './views/prod/create-produto/create-produto.component';
import { UpdateProdutoComponent } from './views/prod/update-produto/update-produto.component';
import { AlterarFarmaComponent } from './views/farma/alterar-farma/alterar-farma.component';
import { CreateUserComponent } from './views/auth/create-user/create-user.component';
import { LoginComponent } from './views/auth/login/login.component';

import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localePt);


// Material Angular


import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { LayoutModule } from "@angular/cdk/layout";
import { MatSnackBarModule } from "@angular/material/snack-bar";



@NgModule({
  declarations: [
    AppComponent,
    ListFarmaProdComponent,
    ListFarmaComponent,
    CreateFarmaComponent,
    CreateProdutoComponent,
    UpdateProdutoComponent,
    AlterarFarmaComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    CreateUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
