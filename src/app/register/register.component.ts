import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  acno:any
  uname:any
  psw:any
  constructor(private ds:DataService,private router:Router){

  }

  register(){
    var acnum=this.acno
    var psw=this.psw
    var uname=this.uname
    const result=this.ds.register(acnum,uname,psw)
    if(result){
      alert('registered')
      this.router.navigateByUrl("")
    } else{
     alert('user already present')
    }

  }   

}
