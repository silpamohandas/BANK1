import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  data="happ banking with us"
  serviceData:any

  acno:any
  psw:any

  constructor(private router:Router,private ds:DataService){}
  ngOnInit():void{


  }
  login(){

   this.ds.login(this.acno,this.psw).subscribe((result:any)=>{
    alert(result.message)
        this.router.navigateByUrl('home')

   },
   result=>{
    alert(result.error.message)
   }
   )
    
    
    // console.log(a.value);
    // alert("login clicked")
    // this.router.navigateByUrl('home')
    
    // alert("login wrks")
  }

}
