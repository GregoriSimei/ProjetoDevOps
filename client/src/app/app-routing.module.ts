import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlterarFarmaComponent } from './views/farma/alterar-farma/alterar-farma.component';
import { CreateFarmaComponent } from './views/farma/create-farma/create-farma.component';
import { ListFarmaComponent } from './views/farma/list-farma/list-farma.component';
import { CreateProdutoComponent } from './views/prod/create-produto/create-produto.component';
import { ListProdutoComponent } from './views/prod/list-produto/list-produto.component';
import { UpdateProdutoComponent } from './views/prod/update-produto/update-produto.component';

const routes: Routes = [
  {
    path: '',
    component: ListFarmaComponent
  },
  {
    path: 'farma/create',
    component: CreateFarmaComponent
  },
  {
    path: 'farma/create/:cnpj',
    component: CreateFarmaComponent
  },
  {
    path: 'farma/alterar/:cnpj',
    component: AlterarFarmaComponent
  },
  {
    path: 'farma/:cnpj/produto',
    component: ListProdutoComponent
  },
  {
    path: 'farma/:cnpj/produto/:codigo/atualizar',
    component: UpdateProdutoComponent
  },
  {
    path: 'farma/:cnpj/cadastrar/produto',
    component: CreateProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
