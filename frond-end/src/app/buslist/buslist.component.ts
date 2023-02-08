import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BusListService } from './buslist.service';

@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.scss']
})
export class BuslistComponent implements OnInit {
  credentialsService: any;
  

  constructor( private buslistService:BusListService) { }
  private _router: any;
  buses:any=[]
  auth: any;
  

  ngOnInit(): void {
    this.buslistService.getBusList().subscribe(
      (response: any)=>
      {
             console.log(response)
             this.buses=response;
      }
    )
  }

  editBus(id:any){
    this.buslistService.editBus(id).subscribe((res: any) => {
      console.log(res)
      
    })
  }

  
  deleteBus(id:any){
    this.buslistService.deleteBus(id).subscribe((res: any) => {
      console.log(res)
      
    })


}
logout(): Observable<boolean> {
  // Customize credentials invalidation here
  this.credentialsService.clearCredentials();
  return of(true);
}

}
