import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../shared/customer.service';
import { CustomerInfo } from '../../shared/customer-info';
import { CustomerInfoViewModel } from '../../customer-info-viewmodel';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})


export class CustomerComponent implements OnInit {

  // ***** variables declaration *****
  answer: string;
  answerDisplay: string;
  showSpinner = false;
  Message: string;
  MsgFlag: boolean = false;

  saveMessage(msgFlag: boolean, message: string) {
    this.MsgFlag = msgFlag;
    this.Message = message;
  }



  ngForm = new FormGroup({
    customername: new FormControl(null, Validators.required),
    amount: new FormControl(null, [Validators.required, Validators.pattern('^[1-9][0-9]*$')]),
    mobile: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    source: new FormControl(null),
    destination: new FormControl(null),
    // starttime: new FormControl(null, Validators.required),
    isdaytime: new FormControl(1, Validators.required),
    date: new FormControl(null, Validators.required)

  })

  constructor(private customerService: CustomerService) { }

  ngOnInit() {

  }

  showAnswer() {
    this.showSpinner = true;
    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.showSpinner = false;

    }, 2000);
  }

  getErrorMessage() {
    return this.ngForm.controls.email.hasError('required') ? 'You must enter a value' :
      this.ngForm.controls.email.hasError('email') ? 'Not a valid email' :
        '';
  }


  saveCustomerInfo(customer: CustomerInfo) {
    console.log(customer);

    let objCustomer: CustomerInfoViewModel;

    objCustomer.$key = customer.$key;
    objCustomer.customername = customer.customername;
    objCustomer.amount = customer.amount;
    objCustomer.date = customer.date.getDate().toString() + "/" + customer.date.getMonth().toString() + "/" + customer.date.getFullYear().toString();
    objCustomer.source = customer.source;
    objCustomer.destination = customer.destination;
    objCustomer.email = customer.email;
    objCustomer.isdaytime = customer.isdaytime;
    this.customerService.saveCustomer(objCustomer);
    //  this.db.object('/customer').set(customer);

    //this.customer$.
  }


  onSubmit(customer: CustomerInfo) {

    if (this.ngForm.valid) {
      console.log(customer);

      let objCustomer = new CustomerInfoViewModel();
      let month = customer.date.getMonth() + 1;

      objCustomer.customername = customer.customername;
      objCustomer.amount = customer.amount;
      objCustomer.date = customer.date.getDate().toString() + "/" + month.toString() + "/" + customer.date.getFullYear().toString();
      objCustomer.source = customer.source;
      objCustomer.destination = customer.destination;
      objCustomer.email = customer.email;
      objCustomer.isdaytime = customer.isdaytime;

      //console.log(customer.Date.getDate());


      this.customerService.saveCustomer(objCustomer).subscribe(status => {
        if (status.length > 0) {
          this.ngForm.reset();
          this.saveMessage(true, "Records saved successfully !")
        }
      }
      );
    }
  }

}

