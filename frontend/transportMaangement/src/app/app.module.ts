import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './users/board-admin/board-admin.component';

import { BoardManagerComponent } from './managers/managerList/board-manager.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BranchComponent } from './branches/branch/branch.component';
import { TruckComponent } from './trucks/truck/truck.component';
import { CreateBranchComponent } from './branches/create-branch/create-branch.component';
import { AddManagerComponent } from './managers/add-manager/add-manager.component';
import { EditManagerComponent } from './managers/edit-manager/edit-manager.component';
import { EditBranchComponent } from './branches/edit-branch/edit-branch.component';
import { TruckDetailsComponent } from './trucks/truck-details/truck-details.component';
import { ContactComponent } from './contact/contact.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { InstallTruckComponent } from './trucks/install-truck/install-truck.component';
import { ManagerBoardComponent } from './manager-board/manager-board.component';
import { DriverComponent } from './driver/driverList/driver.component';
import { TripDetailsComponent } from './trips/trip-details/trip-details.component';
import { DriverDetailsComponent } from './driver/driver-details/driver-details.component';
import { TripListComponent } from './trips/trip-list/trip-list.component';
import { AddTripComponent } from './trips/add-trip/add-trip.component';
import { AddDriverComponent } from './driver/add-driver/add-driver.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { SingleComponent } from './single/single.component';
import { PriceComponent } from './price/price.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
   
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
   
    BoardManagerComponent,
    BranchComponent,
    TruckComponent,
 
    CreateBranchComponent,
    AddManagerComponent,
    EditManagerComponent,
    EditBranchComponent,
    TruckDetailsComponent,
    ContactComponent,
    MessagesComponent,
    ProfileComponent,
    InstallTruckComponent,
    ManagerBoardComponent,
    DriverComponent,
    TripDetailsComponent,
    DriverDetailsComponent,
    TripListComponent,
    AddTripComponent,
    AddDriverComponent,
    AboutComponent,
    ServiceComponent,
    SingleComponent,
    PriceComponent,
    BlogComponent,
    HeaderComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
