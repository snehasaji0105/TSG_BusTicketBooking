 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredentialsService } from '@app/auth';
import { Observable } from 'rxjs';

 export interface AddTicketContext {
  bookingDate: string;
  noOfPassengers: number;
 
  // remember?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AddTicketService {


  

  constructor(private http : HttpClient, private credentialService:CredentialsService) { }
  // getTicket():Observable<any>{
  //   return this.http.get('api/ticket/add-ticket',{headers:{"Authorization": `Bearer ${this.credentialService.credentials}`}})
    
  // }
  addTicket(requestObj: AddTicketContext):Observable<any>{
 
    return this.http.post('/api/ticket/add-ticket', requestObj ,{headers:{"Authorization": `Bearer ${this.credentialService.credentials}`}})
  }
  

}