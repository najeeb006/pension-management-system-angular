import { Component, OnInit } from '@angular/core';
import { PensionStatusResponse } from 'src/app/pension-status-response';
import { PensionerServiceService } from 'src/services/pensioner-service.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-pension-status',
  templateUrl: './pension-status.component.html',
  styleUrls: ['./pension-status.component.css']
})
export class PensionStatusComponent implements OnInit {
  credentials:any={
    aadhaarNumber:"",
    pensionAmount:null,
    serviceCharge:null,
  }
  result:any;

  constructor(private pensionService:PensionerServiceService) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    this.pensionService.getPensionStatus(this.credentials).subscribe(
      (data:PensionStatusResponse)=>
      {
        console.log(data.statusCode);

        this.result=data.statusCode;

        if(this.result==10)
        {
          Swal.fire('Congratulations!', 'Pension Amount is valid', 'success');
        }
        if(this.result==20)
        {
          Swal.fire('Error!', "Pension Amount is invalid", 'error');
        }
      },
      error=>
      {
        console.log(error);

      }
    );
  }

}
