import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RestaurantListingComponent } from './restaurant-listing/restaurant-listing.component';
import { MapviewComponent } from './mapview/mapview.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'restaulist',component:RestaurantListingComponent},
  {path:'mapview',component:MapviewComponent},
  {path:'**',redirectTo:'restaulist',pathMatch:'full'}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
