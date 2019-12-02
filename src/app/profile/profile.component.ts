import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { APIService } from '../API.service';
import { Auth } from 'aws-amplify';
import { User } from '../models/user';
import {Restaurant} from '../models/restaurant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
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
  userForm: FormGroup = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    profilepic: new FormControl(),
    restaurantOwnwer:new FormControl('no')
  });
  restaurantForm:FormGroup=new FormGroup({
    addressLine:new FormControl(),
    addressLine2:new FormControl(),
    city:new FormControl(),
    state:new FormControl(),
    zipCode:new FormControl(),
    country:new FormControl()
  });
  userCreated: boolean;
  showPhoto: boolean;
  showEditPhoto:boolean;
  isLoggedIn: boolean = true;
  url: string = "https://restauranttasting6934ebefb07b4df099a299bb6cfe6144-dev.s3.amazonaws.com/public/";
  imgpath = "image/defaultimage.jpg";
  constructor(private api: APIService,private router:Router) { }

  ngOnInit() {
    Auth.currentAuthenticatedUser({ bypassCache: false }).then(async user => {
      console.log("the user information is " + JSON.stringify(user));
      this.userId = user.attributes.sub;
      this.userName = user.username;
      console.log("the user id is " + JSON.stringify(this.userId));
      let result = await this.api.GetUser(this.userId);
    
      if (!result) {
        console.log("user is not created " + result);
        this.showPhoto=true;
        this.userCreated = false;
        this.url = this.url + this.imgpath;
        this.userForm = new FormGroup({ firstname: new FormControl(), lastname: new FormControl(), profilepic: new FormControl(result.profilepic) });
        this.restaurantForm=new FormGroup({ addressLine: new FormControl(), addressLine1: new FormControl(), city: new FormControl(),state: new FormControl(),zipCode: new FormControl(),country: new FormControl() });
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
        
        console.log("urlllllllllll " + JSON.stringify(this.url));
        this.userForm = new FormGroup({ firstname: new FormControl(result.firstname), lastname: new FormControl(result.lastname), profilepic: new FormControl(result.profilepic) });
        this.restaurantForm=new FormGroup({ addressLine: new FormControl(result.restaurant.addressLine), addressLine2: new FormControl(result.restaurant.addressLine2), city: new FormControl(result.restaurant.city),state: new FormControl(result.restaurant.state),zipCode: new FormControl(result.restaurant.zipCode),country: new FormControl() });
        if(result.restaurant.addressLine){
          this.router.navigate(['/userprofile']);
        }
      
      }
    }).catch(err => console.log("there is an error on profile component " + err));
  }
  onAlbumImageSelected(event) {
    window.open(event, '_blank');
  }
  async submit() {
    console.log("the user input form is " + JSON.stringify(this.userForm.value));
    this.user = { bio: null, firstname: this.userForm.get('firstname').value, lastname: this.userForm.get('lastname').value, email: this.userName, id: this.userId, profilepic: this.imgpath,restaurant:{addressLine:this.restaurantForm.get('addressLine').value,addressLine2:this.restaurantForm.get('addressLine2').value,city:this.restaurantForm.get('city').value,state:this.restaurantForm.get('state').value,zipCode:this.restaurantForm.get('zipCode').value,country:'US' }};
    console.log("the finale " + JSON.stringify(this.user));
    await this.api[this.getType()](this.user);
    this.router.navigate(['/userprofile']);

  }
  editphoto(){
    this.showPhoto=!this.showPhoto;
  }

  getType(): string {
    return this.userCreated ? 'UpdateUser' : 'CreateUser';
  }

  async onImageUploaded(e) {
    this.userForm.controls['profilepic'].setValue(e.key);
    await this.api[this.getType()]({ id: this.userId, profilepic: this.userForm.get('profilepic').value });
    this.url = "https://restauranttasting6934ebefb07b4df099a299bb6cfe6144-dev.s3.amazonaws.com/public/" + this.userForm.get('profilepic').value;
    console.log("the image uploaded is "+this.url);
    this.showPhoto = true;
    //this.router.navigate(['/profile']);

  }

  async saveAddress(){
    this.user = { bio: null, firstname: this.userForm.get('firstname').value, lastname: this.userForm.get('lastname').value, email: this.userName, id: this.userId, profilepic: this.url,restaurant:{addressLine:this.restaurantForm.get('addressLine').value,addressLine2:this.restaurantForm.get('addressLine2').value,city:this.restaurantForm.get('city').value,state:this.restaurantForm.get('state').value,zipCode:this.restaurantForm.get('zipCode').value,country:'US' }};
    //this.restaurant={addressLine:this.restaurantForm.get('addressLine1').value,addressLine2:this.restaurantForm.get('addressLine2').value,city:this.restaurantForm.get('city').value,state:this.restaurantForm.get('state').value,zipCode:this.restaurantForm.get('zipCode').value,country:'US' };
    console.log("the address is "+JSON.stringify(this.restaurant));
    await this.api.UpdateUser(this.user);
    console.log("address info is saved successfully");
  }

}
