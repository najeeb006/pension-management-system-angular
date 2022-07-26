import { BankDetails } from "./bank-details";


export class PensionerDetail {
  constructor(bankDetails:BankDetails){
    this.bankDetail = bankDetails;

  }



  aadhaarNumber:any;
	name:any;
	dateOfBirth:any;
	panNumber:any;
	salary:any;
	allowance:any;
	pensionType:any;
  bankDetail:BankDetails;



}
