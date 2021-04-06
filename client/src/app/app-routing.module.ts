import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { HomeComponent } from './Home/home/home.component';
import {ComandanciaComponent} from './comandancia/comandancia.component';
import {ComandanciaAltaComponent} from "./comandancia-alta/comandancia-alta.component";
import {AltaExpedienteComponent} from "./alta-expediente/alta-expediente.component";


const routes: Routes = [
  {
    path: 'listarCustomers',
    component: CustomerComponent,
    data: { title: 'Customer List' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'customer-create',
    component: CustomerCreateComponent,
    data: { title: 'Add Customer' }
  },
  {
    path: 'customer-details/:id',
    component: CustomerDetailComponent,
    data: { title: 'Customer Details' }
  },
  {
    path: 'customer-edit/:id',
    component: CustomerEditComponent,
    data: { title: 'Edit Customer' }
  },
  {
    path: 'listar-comandancias',
    component: ComandanciaComponent,
    data: { title: 'Listar Comandancias' }
  },
  {
    path: 'alta-comandancia',
    component: ComandanciaAltaComponent,
    data: { title: 'Alta Comandancia' }
  },
  {
    path: 'alta-Expediente',
    component: AltaExpedienteComponent,
    data: { title: 'Alta Expediente' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
