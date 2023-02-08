import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBusComponent } from './addbus/addbus.component';
import { AddBusRouteComponent } from './addbusroute/addbusroute.component';
import { AddTicketComponent } from './addticket/addticket.component';
import { LoginComponent } from './auth/login/login.component';
import { BuslistComponent } from './buslist/buslist.component';
import { BusroutelistComponent } from './busroutelist/busroutelist.component';
import { TicketlistComponent } from './ticketlist/ticketlist.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
  {path: 'ticketlist', component: AddTicketComponent, pathMatch: 'full' },
  {path: 'buslist', component: BuslistComponent, pathMatch: 'full' },
  {path: 'busroutelist', component: BusroutelistComponent, pathMatch: 'full' },
  {path: 'addbus', component: AddBusComponent, pathMatch: 'full' },
  {path: 'addbusroute', component: AddBusRouteComponent, pathMatch: 'full' },
  {path: 'addticket', component: AddTicketComponent, pathMatch: 'full' },
  {path: 'ticketlist', component: TicketlistComponent, pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
