import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredentialsService } from '@app/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusRouteListService {
  constructor(private http : HttpClient,private credentialService:CredentialsService) { }  
  getBusRouteList():Observable<any> {
    return this.http.get<any>("http://localhost:8080/api/route/get-busroute",{headers:{"Authorization": `Bearer ${this.credentialService.credentials}`}})
  } 
  editBusRoute(id:any):Observable<any> {
    
    return this.http.put<any>(`http://localhost:8080/api/bus/update-busroute/${id}`,{headers:{"Authorization": `Bearer ${this.credentialService.credentials}`}})
}
  
  deleteBusRoute(id:any):Observable<any> {
    
    return this.http.delete<any>(`http://localhost:8080/api/bus/delete-busroute/${id}`,{headers:{"Authorization": `Bearer ${this.credentialService.credentials}`}})
}
}
