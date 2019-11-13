import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { APIService } from '../API.service';
import { Auth } from 'aws-amplify';
import { User } from '../models/user';
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
  userId: string;
  userName: string;
  userForm: FormGroup = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    profilepic: new FormControl()
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
      }
    }).catch(err => console.log("there is an error on profile component " + err));
  }
  onAlbumImageSelected(event) {
    window.open(event, '_blank');
  }
  async submit() {
    console.log("the user input form is " + JSON.stringify(this.userForm.value));
    this.user = { bio: null, firstname: this.userForm.get('firstname').value, lastname: this.userForm.get('lastname').value, email: this.userName, id: this.userId, profilepic: this.url };
    console.log("the finale " + JSON.stringify(this.user));
    await this.api[this.getType()](this.user);
    this.router.navigate(['/profile']);

  }
  editphoto(){
    this.showPhoto=!this.showPhoto;
  }

  getType(): string {
    return this.userCreated ? 'UpdateUser' : 'CreateUser';
  }

  async onImageUploaded(e) {
    this.userForm.controls['profilepic'].setValue(e.key);
    await this.api.UpdateUser({ id: this.userId, profilepic: this.userForm.get('profilepic').value });
    this.url = "https://restauranttasting6934ebefb07b4df099a299bb6cfe6144-dev.s3.amazonaws.com/public/" + this.userForm.get('profilepic').value;
    console.log("the image uploaded is "+this.url);
    this.showPhoto = true;
    //this.router.navigate(['/profile']);

  }

}
