import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredentialsService } from '@app/auth';
import { Observable } from 'rxjs';

export interface AddBusRouteContext {
  bookedSeats: number;
  journeyDate: string;
 
  // remember?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AddBusRouteService {
  

  constructor(private http : HttpClient, private credentialService:CredentialsService) { }
  getBusRoute():Observable<any>{
    return this.http.get('api/route/get-busroute',{headers:{"Authorization": `Bearer ${this.credentialService.credentials}`}})
    
  }
  addBusRoute(requestObj: AddBusRouteContext):Observable<any>{
   
    return this.http.post('/api/route/add-busroute', requestObj ,{headers:{"Authorization": `Bearer ${this.credentialService.credentials}`}})
  }
  

}
   
