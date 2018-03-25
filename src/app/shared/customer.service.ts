import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { CustomerInfo } from './customer-info';
import { CustomerInfoViewModel } from '../customer-info-viewmodel';
import { ExpenseViewModel } from './expenseviewmodel';


@Injectable()
export class CustomerService implements OnInit {


  customerList$: AngularFireList<CustomerInfoViewModel>;
  expenseList$: AngularFireList<ExpenseViewModel>;

  customer$: Observable<any>;
  constructor(private db: AngularFireDatabase) {
    this.customerList$ = this.db.list('/customerlist');
    this.expenseList$=this.db.list('/expenseList')
    //this.customerList1$ = res.slice();
    //console.log('service called');
    //console.log(res.slice());
    console.log(this.customerList$);

    // this.customer$ = this.db.object('/customer').valueChanges();
    //this.getCustomerList();
    // obervable.valueChanges().subscribe(next => console.log('next', next),
    //   error => console.log('error', error),
    //   () => console.log('completed'));
  }


  ngOnInit() {
    //this.customerList$=this.getCustomerList();
  }


  saveCustomer(customer: CustomerInfoViewModel) {
    console.log(customer);
    this.customerList$.push(customer);
    // return this.customerList$;
    // Observable.from(this.db.list('/customerlist').push(customer));
    return this.db.list('/customerlist').valueChanges();
    //console.log(customer);
  }


  saveExpense(expense: ExpenseViewModel) {
    console.log(expense);
    this.expenseList$.push(expense);
    // return this.customerList$;
    // Observable.from(this.db.list('/customerlist').push(customer));
    return this.db.list('/expenseList').valueChanges();
    //console.log(customer);
  }

  editCustomer(customer) {
    this.db.object('/customerlist').update(customer);
    console.log(customer);
  }

  deleteCustomer(customer) {
    this.db.object('/customerlist ').remove();
    console.log(customer);
  }

  // getCustomerList() {
  //   return this.db.list('/customerlist').valueChanges().map((data: CustomerInfo[]) => {
  //     console.log(data);
  //     return data;
  //   });
  //  }

  getCustomerList(): Observable<{}[]> {
    return this.db.list('/customerlist').valueChanges();
  }

  getExpenseList(): Observable<{}[]> {
    return this.db.list('/expenseList').valueChanges();
  }

}
