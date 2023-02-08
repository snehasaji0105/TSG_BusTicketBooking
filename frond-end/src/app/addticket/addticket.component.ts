import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AddTicketService } from './addticket.service';

@Component({
  selector: 'app-addticket',
  templateUrl: './addticket.component.html',
  styleUrls: ['./addticket.component.scss']
})
export class AddTicketComponent implements OnInit {
  addTicketForm!: FormGroup;
  ticket: any;
  credentialService: any;
   constructor(private addTicketService :AddTicketService,private formBuilder: FormBuilder, private _router : Router) {
     this.createForm()
    }
 
   ngOnInit(): void {
    //  this.addTicketService.getTicket().subscribe(
    //    (response: any)=>{
    //      console.log(response)
    //      this.ticket = response
    //    }
    //  )
   }
   addTicket(){
     if(this.addTicketForm.valid){
       console.log(this.addTicketForm.value)
       const reqObj ={
         bookingDate:this.addTicketForm.value.bookingDate,
         noOfPassengers:this.addTicketForm.value.noOfPassengers,
       
     }
     console.log("req",reqObj)
 
       this.addTicketService.addTicket(reqObj).subscribe(
         (response:any)=>{
           console.log(response)
         this._router.navigate(["ticketlist"])
 
         }
       )
 
     }
   }

   logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialService.clearCredentials();
    return of(true);
  }
   private createForm() {
     this.addTicketForm = this.formBuilder.group({
      bookingDate: ['', Validators.required],
      noOfPassengers: ['', Validators.required],
      
     });
   } }