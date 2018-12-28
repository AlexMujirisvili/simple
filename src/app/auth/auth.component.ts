import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/AuthenticationService';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private auth: AuthenticationService,
         private router: Router) { }

  username: string;
  password: string;
  
  error: string;
  authStatus: boolean;

  ngOnInit() {
  }

  logIn() {
    this.authStatus = this.auth.logIn(this.username, this.password);
    if(this.authStatus){
       alert("User authenticated")
       this.router.navigate(['/user']);
    }
    else{
       alert("Incorrect username or password")
    }
  }

}
