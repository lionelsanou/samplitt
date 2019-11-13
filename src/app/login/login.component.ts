import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AmplifyService} from 'aws-amplify-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  usernameAttributes = "email"; 
  constructor(public amplifyService:AmplifyService,public router:Router) {
    this.amplifyService=amplifyService;
    this.amplifyService.authStateChange$
      .subscribe(authState=>{
        console.log('good 1 '+JSON.stringify(authState));
        if(authState.state==='signedIn'){
          console.log("good");
          this.router.navigate(['/profile']);
        }
      });
   }

  ngOnInit() {
  }

}
