import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TicketListService } from './ticketlist.service';


@Component({
  selector: 'app-ticketlist',
  templateUrl: './ticketlist.component.html',
  styleUrls: ['./ticketlist.component.scss']
})
export class TicketlistComponent implements OnInit {
  credentialsService: any;
  

  constructor( private ticketlistService:TicketListService) { }
  private _router: any;
  ticket:any=[]
  auth: any;
  

  ngOnInit(): void {
    this.ticketlistService.getTicketList().subscribe(
      (response: any)=>
      {
             console.log(response)
             this.ticket=response;
      }
    )
  }


  deleteTicket(id:any){
    this.ticketlistService.deleteTicket(id).subscribe((res: any) => {
      console.log(res)
      
    })


}
logout(): Observable<boolean> {
  // Customize credentials invalidation here
  this.credentialsService.clearCredentials();
  return of(true);
}

}
// function id(id: any) {
//   throw new Error('Function not implemented.');
// }

