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
import { BuscarFarmaComponent } from './views/farma/buscar-farma/buscar-farma.component';
import { AlterarFarmaComponent } from './views/farma/alterar-farma/alterar-farma.component';
import { RemoverFarmaComponent } from './views/farma/remover-farma/remover-farma.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFarmaComponent,
    CreateFarmaComponent,
    ListProdutoComponent,
    CreateProdutoComponent,
    UpdateProdutoComponent,
    BuscarFarmaComponent,
    AlterarFarmaComponent,
    RemoverFarmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
