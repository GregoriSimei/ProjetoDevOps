import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';
import { CompraComponent } from './views/compra/compra.component';
import { AlterarFarmaComponent } from './views/farma/alterar-farma/alterar-farma.component';
import { CreateFarmaComponent } from './views/farma/create-farma/create-farma.component';
import { ListFarmaProdComponent } from './views/farma/list-farma-prod/list-farma-prod.component';
import { ListFarmaComponent } from './views/farma/list-farma/list-farma.component';
import { CreateProdutoComponent } from './views/prod/create-produto/create-produto.component';
import { ListProdComponent } from './views/prod/list-prod/list-prod.component';
import { UpdateProdutoComponent } from './views/prod/update-produto/update-produto.component';
import { ClienteTransacaoComponent } from './views/transacoes/cliente-transacao/cliente-transacao.component';
import { FarmaTransacaoComponent } from './views/transacoes/farma-transacao/farma-transacao.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'farma',
    component: ListFarmaProdComponent
  },
  {
    path: 'farma/list',
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
    path: 'farma/:cnpj/produto/:codigo',
    component: UpdateProdutoComponent
  },
  {
    path: 'farma/:cnpj/produto',
    component: CreateProdutoComponent
  },
  {
    path: 'carrinho',
    component: CompraComponent
  },
  {
    path: 'cliente',
    component: ListProdComponent
  },
  {
    path: 'farma/transacoes',
    component: FarmaTransacaoComponent
  },
  {
    path: 'cliente/transacoes',
    component: ClienteTransacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
