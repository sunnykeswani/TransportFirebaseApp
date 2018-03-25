import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { ExpensesComponent } from '../expenses/expenses.component';
import { ExpenseListComponent } from '../expenselist/expenselist.component';
import { CustomerInfoComponent } from '../customer/customer-info/customer-info.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { HomeComponent } from '../home/home.component';
import { CustomerComponent } from '../customer/customer/customer.component';




const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'expense',
    component: ExpensesComponent
  },
  {
    path: 'expenselist',
    component: ExpenseListComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'customerlist',
    component: CustomerListComponent
  },
  { path: '**', component: PageNotFoundComponent }
]

export const Routing = RouterModule.forRoot(appRoutes);