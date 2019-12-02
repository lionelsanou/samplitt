import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { APIService } from '../API.service';
import { Auth } from 'aws-amplify';
import { User } from '../models/user';
import {Restaurant} from '../models/restaurant';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom:number;
  usStates = [
    { name: 'ALABAMA', abbreviation: 'AL'},
    { name: 'ALASKA', abbreviation: 'AK'},
    { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
    { name: 'ARIZONA', abbreviation: 'AZ'},
    { name: 'ARKANSAS', abbreviation: 'AR'},
    { name: 'CALIFORNIA', abbreviation: 'CA'},
    { name: 'COLORADO', abbreviation: 'CO'},
    { name: 'CONNECTICUT', abbreviation: 'CT'},
    { name: 'DELAWARE', abbreviation: 'DE'},
    { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
    { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
    { name: 'FLORIDA', abbreviation: 'FL'},
    { name: 'GEORGIA', abbreviation: 'GA'},
    { name: 'GUAM', abbreviation: 'GU'},
    { name: 'HAWAII', abbreviation: 'HI'},
    { name: 'IDAHO', abbreviation: 'ID'},
    { name: 'ILLINOIS', abbreviation: 'IL'},
    { name: 'INDIANA', abbreviation: 'IN'},
    { name: 'IOWA', abbreviation: 'IA'},
    { name: 'KANSAS', abbreviation: 'KS'},
    { name: 'KENTUCKY', abbreviation: 'KY'},
    { name: 'LOUISIANA', abbreviation: 'LA'},
    { name: 'MAINE', abbreviation: 'ME'},
    { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
    { name: 'MARYLAND', abbreviation: 'MD'},
    { name: 'MASSACHUSETTS', abbreviation: 'MA'},
    { name: 'MICHIGAN', abbreviation: 'MI'},
    { name: 'MINNESOTA', abbreviation: 'MN'},
    { name: 'MISSISSIPPI', abbreviation: 'MS'},
    { name: 'MISSOURI', abbreviation: 'MO'},
    { name: 'MONTANA', abbreviation: 'MT'},
    { name: 'NEBRASKA', abbreviation: 'NE'},
    { name: 'NEVADA', abbreviation: 'NV'},
    { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
    { name: 'NEW JERSEY', abbreviation: 'NJ'},
    { name: 'NEW MEXICO', abbreviation: 'NM'},
    { name: 'NEW YORK', abbreviation: 'NY'},
    { name: 'NORTH CAROLINA', abbreviation: 'NC'},
    { name: 'NORTH DAKOTA', abbreviation: 'ND'},
    { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
    { name: 'OHIO', abbreviation: 'OH'},
    { name: 'OKLAHOMA', abbreviation: 'OK'},
    { name: 'OREGON', abbreviation: 'OR'},
    { name: 'PALAU', abbreviation: 'PW'},
    { name: 'PENNSYLVANIA', abbreviation: 'PA'},
    { name: 'PUERTO RICO', abbreviation: 'PR'},
    { name: 'RHODE ISLAND', abbreviation: 'RI'},
    { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
    { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
    { name: 'TENNESSEE', abbreviation: 'TN'},
    { name: 'TEXAS', abbreviation: 'TX'},
    { name: 'UTAH', abbreviation: 'UT'},
    { name: 'VERMONT', abbreviation: 'VT'},
    { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
    { name: 'VIRGINIA', abbreviation: 'VA'},
    { name: 'WASHINGTON', abbreviation: 'WA'},
    { name: 'WEST VIRGINIA', abbreviation: 'WV'},
    { name: 'WISCONSIN', abbreviation: 'WI'},
    { name: 'WYOMING', abbreviation: 'WY' }
];
  user: User;
  restaurant:Restaurant;
  userId: string;
  userName: string;
  firstname:string;
  lastname:string;
  userCreated: boolean;
  showPhoto: boolean;
  showEditPhoto:boolean;
  isLoggedIn: boolean = true;
  url: string = "https://restauranttasting6934ebefb07b4df099a299bb6cfe6144-dev.s3.amazonaws.com/public/";
  imgpath = "image/defaultimage.jpg";
  selectedStartDate:any;
  selectedEndDate:any;
  eventIsScheduled:boolean=false;

  restaurantForm:FormGroup=new FormGroup({
    addressLine:new FormControl(),
    addressLine2:new FormControl(),
    city:new FormControl(),
    state:new FormControl(),
    zipCode:new FormControl(),
    country:new FormControl()
  });

  TestingDateForm:FormGroup=new FormGroup({
    startTime:new FormControl(),
    endTime:new FormControl(),
  });

  getType(): string {
    return this.userCreated ? 'UpdateUser' : 'CreateUser';
  }

  async saveAddress(){
    this.user = { bio: null, firstname:this.firstname, lastname: this.lastname, email: this.userName, id: this.userId, profilepic:this.imgpath,restaurant:{addressLine:this.restaurantForm.get('addressLine').value,addressLine2:this.restaurantForm.get('addressLine2').value,city:this.restaurantForm.get('city').value,state:this.restaurantForm.get('state').value,zipCode:this.restaurantForm.get('zipCode').value,country:'US',testingEvent:{startTime:this.selectedStartDate,endTime:this.selectedEndDate,eventPicture:"test"} }};
    console.log("the finale " + JSON.stringify(this.user));
    await this.api[this.getType()](this.user);
    location.reload();
  }

async saveEventDate(){
  this.user = { bio: null, firstname:this.firstname, lastname: this.lastname, email: this.userName, id: this.userId, profilepic:this.imgpath,restaurant:{addressLine:this.restaurantForm.get('addressLine').value,addressLine2:this.restaurantForm.get('addressLine2').value,city:this.restaurantForm.get('city').value,state:this.restaurantForm.get('state').value,zipCode:this.restaurantForm.get('zipCode').value,country:'US',testingEvent:{startTime:this.selectedStartDate,endTime:this.selectedEndDate,eventPicture:"test"} }};
    console.log("the finale " + JSON.stringify(this.user));
    await this.api[this.getType()](this.user);
    location.reload();
}
 async deleteEvent(){
  this.user = { bio: null, firstname:this.firstname, lastname: this.lastname, email: this.userName, id: this.userId, profilepic:this.imgpath,restaurant:{addressLine:this.restaurantForm.get('addressLine').value,addressLine2:this.restaurantForm.get('addressLine2').value,city:this.restaurantForm.get('city').value,state:this.restaurantForm.get('state').value,zipCode:this.restaurantForm.get('zipCode').value,country:'US',testingEvent:null }};
  console.log("the finale " + JSON.stringify(this.user));
  await this.api[this.getType()](this.user);
  location.reload();
 }


  constructor(private api: APIService,private router:Router) { 
  }
  async onImageUploaded(e) {
   

  }

  onAlbumImageSelected( event ) {
    window.open( event, '_blank' );
}
     // Get Current Location Coordinates
     private setCurrentLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 15;
        });
      }
    }
  ngOnInit() :void{
 
    this.setCurrentLocation();
    Auth.currentAuthenticatedUser({ bypassCache: false }).then(async user => {
      console.log("the user information is " + JSON.stringify(user));
      this.userId = user.attributes.sub;
      this.userName = user.username;
      console.log("the user id is " + JSON.stringify(this.userId));
      let result = await this.api.GetUser(this.userId);
    console.log("pooooo");
      if (!result) {
        console.log("user is not created " + result);
        this.showPhoto=true;
        this.userCreated = false;
        this.url = this.url + this.imgpath;
        //this.userForm = new FormGroup({ firstname: new FormControl(), lastname: new FormControl(), profilepic: new FormControl(result.profilepic) });
        //this.restaurantForm=new FormGroup({ addressLine: new FormControl(), addressLine1: new FormControl(), city: new FormControl(),state: new FormControl(),zipCode: new FormControl(),country: new FormControl() });
      } else {
        this.userCreated = true;
        this.showPhoto = true;
        this.isLoggedIn = true;
        console.log("this is a test " + JSON.stringify(result.profilepic));
        this.imgpath = result.profilepic;
        if(this.user){
          this.url = this.imgpath;
        }else{
          this.url =this.url +  this.imgpath;
        }
        console.log("The user is final object is nooo  " + JSON.stringify(result));
        console.log("urlllllllllll " + JSON.stringify(this.url));
        this.firstname=result.firstname;
        this.lastname=result.lastname;
        if(result && result.restaurant && result.restaurant.testingEvent&& result.restaurant.testingEvent.startTime &&result.restaurant.testingEvent.endTime){
        this.eventIsScheduled=true;
        console.log("testing events are stored");
        this.selectedStartDate=result.restaurant.testingEvent.startTime;
        this.selectedEndDate=result.restaurant.testingEvent.endTime;
        }
        this.user = { bio: null, firstname: result.firstname, lastname: result.lastname, email: result.email, id: this.userId, profilepic: this.url,restaurant:{ addressLine:result.restaurant.addressLine, addressLine2: result.restaurant.addressLine2, city:result.restaurant.city,state:result.restaurant.state,zipCode: result.restaurant.zipCode,country: 'US',testingEvent:{startTime:null,endTime:null} } };
        this.restaurantForm=new FormGroup({ addressLine: new FormControl(result.restaurant.addressLine), addressLine2: new FormControl(result.restaurant.addressLine2), city: new FormControl(result.restaurant.city),state: new FormControl(result.restaurant.state),zipCode: new FormControl(result.restaurant.zipCode),country: new FormControl() });
        console.log("The user is final object is  " + JSON.stringify(this.user));
        //this.userForm = new FormGroup({ firstname: new FormControl(result.firstname), lastname: new FormControl(result.lastname), profilepic: new FormControl(result.profilepic) });
        //this.restaurantForm=new FormGroup({ addressLine: new FormControl(result.restaurant.addressLine), addressLine2: new FormControl(result.restaurant.addressLine2), city: new FormControl(result.restaurant.city),state: new FormControl(result.restaurant.state),zipCode: new FormControl(result.restaurant.zipCode),country: new FormControl() });
      }
    }).catch(err => console.log("there is an error on profile component " + err));
  }

}
