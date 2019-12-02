import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { Auth } from 'aws-amplify';
import { User } from '../models/user';
import {Restaurant} from '../models/restaurant';
@Component({
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrls: ['./restaurant-listing.component.scss']
})
export class RestaurantListingComponent implements OnInit {
  isLoggedIn: boolean = false;
  userId: string;
  userName: string;
  constructor(private api: APIService) { }

  ngOnInit() {
    Auth.currentAuthenticatedUser({ bypassCache: false }).then(async user => {
      console.log("the user information is " + JSON.stringify(user));
      this.userId = user.attributes.sub;
      this.userName = user.username;
      console.log("the user id is " + JSON.stringify(this.userId));
      let result = await this.api.GetUser(this.userId);
    
      if (!result) {
        console.log("user is not created " + result);
       
      } else {
     
        this.isLoggedIn = true;
     
      
      }
    }).catch(err => console.log("there is an error on profile component " + err));
  }

}
