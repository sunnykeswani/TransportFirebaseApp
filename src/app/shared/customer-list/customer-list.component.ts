import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from 'angularfire2/database';
import { CustomerInfo } from '../customer-info';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList$: Observable<{}[]>;
  public list: any;
  testObj: CustomerInfo[];
  customerSortedData: CustomerInfo[];
  test: any;

  constructor(private customerService: CustomerService) {
    console.log('service called');
    //this.customerList$ = this.customerService.getCustomerList();
    this.customerService.getCustomerList().subscribe(val => {

      this.list = val;
      console.log(this.list);
    });
    console.log(this.customerList$);
  }

  ngOnInit() {
    //this.getCustomerList();
    //this.customerList$=this.customerService.customerList$;
    // console.log(this.customerSortedData);
  }



  //   sortCustomerData(sort: Sort) {
  //     const customerData = this.customerList$.slice();
  //     if (!sort.active || sort.direction == '') {
  //       this.customerSortedData = customerData;
  //       return;
  //     }

  //     this.customerSortedData = customerData.sort((a, b) => {
  //       let isAsc = sort.direction == 'asc';
  //       switch (sort.active) {
  //         case 'customername': return compare(a.CustomerName, b.CustomerName, isAsc);
  //         case 'amount': return compare(+a.Amount, +b.Amount, isAsc);
  //         case 'mobile': return compare(+a.Mobile, +b.Mobile, isAsc);
  //         case 'email': return compare(+a.Email, +b.Email, isAsc);
  //         case 'source': return compare(+a.Source, +b.Source, isAsc);
  //         case 'destination': return compare(+a.Destination, +b.Destination, isAsc);
  //         default: return 0;
  //       }
  //     });
  //   }

}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}



