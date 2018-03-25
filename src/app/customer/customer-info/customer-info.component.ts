import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject,AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { CustomerService } from '../../shared/customer.service';


@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  customer$: Observable<{}>;
  //customer$: AngularFireObject<{}>;
  constructor(private customerService: CustomerService, private db:AngularFireDatabase) {
   this.customer$ = this.customerService.customer$;
    
  //  this.customer$=this.db.object('/customer');
    console.log( this.customer$);
  }

  saveCustomerInfo(customer){
    this.customerService.saveCustomer(customer);
  //  this.db.object('/customer').set(customer);
    
//this.customer$.
  }

  editCustomerInfo(customer){
    this.customerService.editCustomer(customer);
    
    console.log(customer);
//this.customer$.
  }

  deleteCustomerInfo(customer){
    this.customerService.deleteCustomer(customer);
    
    console.log(customer);
//this.customer$.
  }

  ngOnInit() {
  }

}
