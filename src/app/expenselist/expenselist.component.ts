import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-expenselist',
  templateUrl: './expenselist.component.html',
  styleUrls: ['./expenselist.component.css']
})
export class ExpenseListComponent implements OnInit {
  public list: any;
  constructor(private customerService: CustomerService) 
  {
    this.customerService.getExpenseList().subscribe(val => {

      this.list = val;
      
    });
    
  }
  

  ngOnInit() {
  }

}
