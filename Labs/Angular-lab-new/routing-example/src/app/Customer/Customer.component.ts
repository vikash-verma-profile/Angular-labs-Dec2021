import { Component } from '@angular/core';
import { Customer } from './Cutomer.CustomerModel';

@Component({
  templateUrl: './Customer.CustomerView.html'
})
export class CustomerComponent {
  
  CustomerModel:Customer=new Customer();

  AddCustomer(){
    console.log(this.CustomerModel);
  }

  hasError(typeofvalidator:string,controlname:string):boolean{
      return this.CustomerModel.formCustomerGroup.controls[controlname].hasError(typeofvalidator);
  }
}
