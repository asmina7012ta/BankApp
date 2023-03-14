import { transition } from '@angular/animations';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any
  currentAcno:any
  userDetails:any={
    1000:{username:"amal",acno:1000,password:"abc123",balance:0,transaction:[]},
    1001:{username:"laalu",acno:1001,password:"laalu32",balance:0,transaction:[]},
    1002:{username:"ziya",acno:1002,password:"123zi45",balance:0,transaction:[]},
    1003:{username:"raza",acno:1003,password:"raza456",balance:0,transaction:[]},
    1004:{username:"aami",acno:1004,password:"123456",balance:30000,transaction:[]}

   }
   register(acno:any,uname:any,psw:any){
    var userDetails=this.userDetails
    if(acno in userDetails){
      return false
    }
    else{

      userDetails[acno]={username:uname,acno,password:psw,balance:0}
      console.log(userDetails);
      
      return true
    }

   }
   login(acno:any,psw:any){
    
    var userDetails=this.userDetails
    if(acno in userDetails){
      if(psw==userDetails[acno]["password"]){
        //stote currentuser
       this.currentUser=userDetails[acno]["username"]
       this.currentAcno=acno
      return true
      }else{
        return false
       
      }
  
    } else{
     return false
    }
    // alert('login worked')
   }
   deposit(acno:any,psw:any,amount:any){
    var amnt=parseInt(amount)
    var userDetails=this.userDetails

    if(acno in userDetails){
      if(psw=userDetails[acno]["password"]){
        userDetails[acno]["balance"]+=amnt
          userDetails[acno]["transaction"].push(
            {
              type:"creadit",
              Amount:amnt
            }
          )


        return userDetails[acno]["balance"]
      }
      else{
      return false
    }
    }
    else{
      return false
    }
   }

   withdraw(acno:any,psw:any,amount:any){

    var amnt=parseInt(amount)
    var userDetails=this.userDetails

    if(acno in userDetails){
      if(psw=userDetails[acno]["password"]){
        if(amount< userDetails[acno]["balance"]){
          userDetails[acno]["balance"]-=amnt
          userDetails[acno]["transaction"].push(
            {
              type:"debit",
              Amount:amnt
            }
          )
          console.log(userDetails);
          
          return userDetails[acno]["balance"]
        }
        else{
          alert(`insufficient balance`)
        }
        

      }else{
        return false
      }


    }else{
      return false
    }


   }
   getTransaction(acno:any){
    return this.userDetails[acno]["transaction"]
   }

  }

