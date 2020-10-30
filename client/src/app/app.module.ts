import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListFarmaComponent } from './views/farma/list-farma/list-farma.component';
import { CreateFarmaComponent } from './views/farma/create-farma/create-farma.component';
import { ListProdutoComponent } from './views/prod/list-produto/list-produto.component';
import { CreateProdutoComponent } from './views/prod/create-produto/create-produto.component';
import { UpdateProdutoComponent } from './views/prod/update-produto/update-produto.component';
import { AlterarFarmaComponent } from './views/farma/alterar-farma/alterar-farma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';

// Material Angular
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ListFarmaComponent,
    CreateFarmaComponent,
    ListProdutoComponent,
    CreateProdutoComponent,
    UpdateProdutoComponent,
    AlterarFarmaComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
