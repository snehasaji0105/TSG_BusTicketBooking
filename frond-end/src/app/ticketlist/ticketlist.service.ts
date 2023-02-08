import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredentialsService } from '@app/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketListService {
  constructor(private http : HttpClient,private credentialService:CredentialsService) { }  
  getTicketList():Observable<any> {
    return this.http.get<any>("http://localhost:8080/api/ticket/get-ticket",{headers:{"Authorization": `Bearer ${this.credentialService.credentials}`}})
  } 
  
  deleteTicket(id:any):Observable<any> {
    
    return this.http.delete<any>(`http://localhost:8080/api/ticket/delete-ticket/${id}`,{headers:{"Authorization": `Bearer ${this.credentialService.credentials}`}})
}
}
