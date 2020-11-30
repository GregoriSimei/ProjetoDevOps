import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './views/auth/create-user/create-user.component';
import { LoginComponent } from './views/auth/login/login.component';
import { AlterarFarmaComponent } from './views/farma/alterar-farma/alterar-farma.component';
import { CreateFarmaComponent } from './views/farma/create-farma/create-farma.component';
import { ListFarmaComponent } from './views/farma/list-farma/list-farma.component';
import { CreateProdutoComponent } from './views/prod/create-produto/create-produto.component';
import { UpdateProdutoComponent } from './views/prod/update-produto/update-produto.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'farma',
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
