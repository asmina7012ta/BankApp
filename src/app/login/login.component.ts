import { Component, OnInit } from '@angular/core';
import { EventType, Router, RouteReuseStrategy } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  data="your perfect banking partner"
  data1="enter your account number"
  //acno=" "
  //or
  acno:any
  psw:any
//   userDetails:any={
//   1000:{username:"amal",acno:1000,password:"abc123",balance:0},
//   1001:{username:"laalu",acno:1001,password:"laalu32",balance:0},
//   1002:{username:"ziya",acno:1002,password:"123zi45",balance:0},
//   1003:{username:"raza",acno:1003,password:"raza456",balance:0}
//  }
 constructor(private router:Router, private ds:DataService){

 }

 login(){
  var acnum=this.acno
  var psw=this.psw

  const result=this.ds.login(acnum,psw)
  if(result){
    alert("login success")
    
    this.router.navigateByUrl("dashboard")
  }else{
        alert("incorrect password")
       
       }
  // var userDetails=this.ds.userDetails
  // if(acnum in userDetails){
  //   if(psw==userDetails[acnum]["password"]){
  //   alert("login success")
  //     this.router.navigateByUrl("dashboard")
  //   }else{
  //     alert("incorrect password")
     
  //   }

  // } else{
  //   alert("user not registerd")
  // }
  // alert('login worked')
 }

}