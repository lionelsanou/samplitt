import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

//Lets import the amplify module and services
import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';

//Lets import the FormsModule
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RestaurantListingComponent } from './restaurant-listing/restaurant-listing.component';
import { MapviewComponent } from './mapview/mapview.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    NavigationbarComponent,
    RestaurantListingComponent,
    MapviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
