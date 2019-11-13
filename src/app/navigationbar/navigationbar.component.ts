import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import {Auth} from 'aws-amplify';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent implements OnInit {
  @Input() userIsLoggedIn :boolean=false;
  constructor(public router:Router) { }

  ngOnInit() {
  }
  logout(){
    Auth.signOut({global:true})
    .then(data=>{
      this.router.navigate(['/restaulist']);
    })
    .catch(error=>{
      console.log(error);
    })
  }

}
