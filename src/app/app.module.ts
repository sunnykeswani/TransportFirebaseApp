import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment'
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'
//import { AngularFirestore } from 'angularfire2/firestore';
//import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './shared/materialmodule';
import { CustomerInfoComponent } from './customer/customer-info/customer-info.component';
import { CustomerService } from './shared/customer.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerListComponent } from './shared/customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpenseListComponent } from './expenselist/expenselist.component';
import { Routing } from './shared/app.routing'
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerInfoComponent,
    CustomerListComponent,
    CustomerComponent,
    ToolbarComponent,
    ExpensesComponent,
    ExpenseListComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    Routing
      ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
