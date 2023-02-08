import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BuslistComponent } from '../buslist/buslist.component';
import { BusroutelistComponent } from '@app/busroutelist/busroutelist.component';
import { AddBusComponent } from '@app/addbus/addbus.component';
import { AddBusRouteComponent } from '@app/addbusroute/addbusroute.component';
import { AddTicketComponent } from '@app/addticket/addticket.component';
import { TicketlistComponent } from '@app/ticketlist/ticketlist.component';
import { AdminhomeComponent } from '@app/adminhome/adminhome.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: marker('Login') } },
  {path: 'register', component: RegisterComponent, data: { title: marker('Register') } },
  {path: 'ticketlist', component: AddTicketComponent, pathMatch: 'full' },
  {path: 'buslist', component: BuslistComponent, pathMatch: 'full' },
  {path: 'busroutelist', component: BusroutelistComponent, pathMatch: 'full' },
  {path: 'addbus', component: AddBusComponent, pathMatch: 'full' },
  {path: 'addbusroute', component: AddBusRouteComponent, pathMatch: 'full' },
  {path: 'addticket', component: AddTicketComponent, pathMatch: 'full' },
  {path: 'ticketlist', component: TicketlistComponent, pathMatch: 'full' },
  {path: 'adminhome', component: AdminhomeComponent, pathMatch: 'full' }
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule {}
