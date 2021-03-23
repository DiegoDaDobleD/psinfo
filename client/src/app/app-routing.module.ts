import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from "./customer/customer.component";
import { CustomerCreateComponent } from "./customer-create/customer-create.component";
import { CustomerDetailComponent } from "./customer-detail/customer-detail.component";
import { CustomerEditComponent } from "./customer-edit/customer-edit.component";

const routes: Routes = [
  {
    path: 'customers',
    component: CustomerComponent,
    data: { title: 'Customer List' }
  },
  { path: '',
    redirectTo: '/customers',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
