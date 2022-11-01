import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './users/board-admin/board-admin.component';
import { BoardManagerComponent } from './managers/managerList/board-manager.component';

import { BranchComponent } from './branches/branch/branch.component';
import { CreateBranchComponent } from './branches/create-branch/create-branch.component';
import { EditManagerComponent } from './managers/edit-manager/edit-manager.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { RegisterComponent } from './register/register.component';
import { TruckComponent } from './trucks/truck/truck.component';
import { EditBranchComponent } from './branches/edit-branch/edit-branch.component';
import { AddManagerComponent } from './managers/add-manager/add-manager.component';
import { TruckDetailsComponent } from './trucks/truck-details/truck-details.component';
import { InstallTruckComponent } from './trucks/install-truck/install-truck.component';
import { ManagerBoardComponent } from './manager-board/manager-board.component';
import { DriverComponent } from './driver/driverList/driver.component';
import { AddDriverComponent } from './driver/add-driver/add-driver.component';
import { DriverDetailsComponent } from './driver/driver-details/driver-details.component';
import { TripDetailsComponent } from './trips/trip-details/trip-details.component';
import { AddTripComponent } from './trips/add-trip/add-trip.component';
import { TripListComponent } from './trips/trip-list/trip-list.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { SingleComponent } from './single/single.component';
import { ServiceComponent } from './service/service.component';
import { PriceComponent } from './price/price.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'single', component: SingleComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'price', component: PriceComponent },
 
 { path: 'truck', component: TruckComponent },
  { path: 'man', component: BoardManagerComponent },
  { path: 'cb', component: CreateBranchComponent },
  { path: 'branch', component: BranchComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'edit/:id', component: EditManagerComponent },
  { path: 'editbranch/:id', component: EditBranchComponent },
  { path: 'truck/:id', component: TruckDetailsComponent },
  { path: 'install', component: InstallTruckComponent },
  { path: 'man/truck/:id', component: ManagerBoardComponent },
   
 { path: 'driver', component: DriverComponent },
 { path: 'addriver', component: AddDriverComponent },
  
 { path: 'driver/:id', component: DriverDetailsComponent },

 { path: 'trip', component: TripListComponent },
 { path: 'addtrip', component: AddTripComponent },
  
 { path: 'trip/:id', component: TripDetailsComponent },

  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }


];


  
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
