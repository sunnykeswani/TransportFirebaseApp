import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../shared/customer.service';
import { Expense } from '../shared/expense';
import { ExpenseViewModel } from '../shared/expenseviewmodel';


@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {



  ngOnInit() {
  }

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
    vehiclenumber: new FormControl(null, Validators.required),
    amount: new FormControl(null, [Validators.required, Validators.pattern('^[1-9][0-9]*$')]),
    description: new FormControl(null),
    date: new FormControl(null, Validators.required)

  })

  constructor(private customerService: CustomerService) { }

  getErrorMessage() {
    return this.ngForm.controls.email.hasError('required') ? 'You must enter a value' :
      this.ngForm.controls.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  onSubmit(expense: Expense) {

    if (this.ngForm.valid) {
      console.log(expense);
      let objExpense = new ExpenseViewModel();


      objExpense.vehiclenumber = expense.vehiclenumber;
      objExpense.amount = expense.amount;
      
      let month = expense.date.getMonth() + 1;
      
      objExpense.date = expense.date.getDate().toString() + "/" + month.toString() + "/" + expense.date.getFullYear().toString();
      objExpense.description = expense.description;


      //console.log(customer.Date.getDate());


      this.customerService.saveExpense(objExpense).subscribe(status => {
        if (status.length > 0) {
          this.ngForm.reset();
          this.saveMessage(true, "Records saved successfully !")
        }
      }
      );
    }
  }


}
