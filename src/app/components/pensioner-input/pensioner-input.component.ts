import { Component, OnInit } from '@angular/core';
import { PensionDetail } from 'src/app/pension-detail';
import { PensionerServiceService } from 'src/services/pensioner-service.service';

@Component({
  selector: 'app-pensioner-input',
  templateUrl: './pensioner-input.component.html',
  styleUrls: ['./pensioner-input.component.css']
})
export class PensionerInputComponent implements OnInit {
  credentials={
    aadhaarNumber:""
  }
  pension:PensionDetail[]=[];

  constructor(private pensionService:PensionerServiceService) { }

  ngOnInit(): void {
  }
  onSubmit()
  {


    this.pensionService.processPension(this.credentials).subscribe(
      (pensiondetail:any)=>
      {
        this.pension.push(pensiondetail);
      },
      error=>
      {
        console.log(this.credentials);
        console.log(error);

      }
    );

  }

}
