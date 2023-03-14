import { Component } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
user:any
acno:any
psw:any
amount:any

acno1:any
psw1:any
amount1:any
  constructor(private ds:DataService){
    this.user=this.ds.currentUser
    

  }
  Deposit(){
  var acno=this.acno
  var psw=this.psw
  var amount=this.amount

  const result=this.ds.deposit(acno,psw,amount)
  if(result){
    alert(`your ac has been credited with amount${amount} and available balance${result}`)
  }
  else{
    alert(`incorrect acnum and password`)
  }
}
withdraw(){
  var acno=this.acno1
  var psw=this.psw1
  var amount=this.amount1
  const result=this.ds.withdraw(acno,psw,amount)
  if(result){
    alert(`your ac has been debited with amount${amount} and available balance${result}`)
  }
  else{
    alert(`incorrect acnum and password`)
  }
}
}
