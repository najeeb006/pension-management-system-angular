import { Component, OnInit } from '@angular/core';
import { PensionerDetail } from 'src/app/pensioner-detail';
import { PensionerServiceService } from 'src/services/pensioner-service.service';


@Component({
  selector: 'app-pensioner-list',
  templateUrl: './pensioner-list.component.html',
  styleUrls: ['./pensioner-list.component.css']
})
export class PensionerListComponent implements OnInit {
  pensionerList:PensionerDetail[]=[];


  constructor(private pensionerService:PensionerServiceService) { }

  ngOnInit(): void {
    this.getPensioner();
  }
  private getPensioner()
  {
    this.pensionerService.getPensionerDetail().subscribe(
      data=>{

        this.pensionerList=data;

        console.log(this.pensionerList);
      }
    );
  }

}
