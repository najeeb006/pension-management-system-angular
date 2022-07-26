import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PensionStatusResponse } from 'src/app/pension-status-response';
import { PensionerDetail } from 'src/app/pensioner-detail';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PensionerServiceService {
  baseUrl=environment.url;

  constructor(private http:HttpClient) { }

  getPensionerDetail(){
    return this.http.get<PensionerDetail[]>(this.baseUrl+"/details");
  }

  getPensionStatus(credentials:any)
  {
    return this.http.post<PensionStatusResponse>( `${this.baseUrl}/pensionStatus`,credentials);
  }

  processPension(credentials:any)
  {
    return this.http.post(`${this.baseUrl}/ProcessPension`,credentials);
  }
}
