import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
//import { AngularFire } from 'angularfire2';
import { CustomerService } from './shared/customer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customer$: AngularFireObject<any>;

  constructor(private customerService: CustomerService) {
    //this.customer$ = customerService.customer$;
   // console.log(this.customer$);
  }

  saveCustomer(customer) {
   // this.customerService.saveCustomer(customer)
  }
}
