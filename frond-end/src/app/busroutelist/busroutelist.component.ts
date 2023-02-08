import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BusRouteListService } from './busroutelist.service';

@Component({
  selector: 'app-busroutelist',
  templateUrl: './busroutelist.component.html',
  styleUrls: ['./busroutelist.component.scss']
})
export class BusroutelistComponent implements OnInit {
  credentialsService: any;
  constructor(private busroutelistService:BusRouteListService) { }
  private _router: any;
  routes:any=[]
  auth: any;
  

  ngOnInit(): void {
    this.busroutelistService.getBusRouteList().subscribe(
      (response: any)=>
      {
             console.log(response)
             this.routes=response;
      }
    )
  }

  editBusRoute(id:any){
    this.busroutelistService.editBusRoute(id).subscribe((res: any) => {
      console.log(res)
      
    })
  }

  
  deleteBusRoute(id:any){
    this.busroutelistService.deleteBusRoute(id).subscribe((res: any) => {
      console.log(res)
      
    })


}
logout(): Observable<boolean> {
  // Customize credentials invalidation here
  this.credentialsService.clearCredentials();
  return of(true);
}

}
