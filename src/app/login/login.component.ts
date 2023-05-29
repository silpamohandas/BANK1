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

  constructor(private router:Router,private ds:DataService){}
  ngOnInit():void{
this.serviceData=this.ds.sdata
console.log(this.serviceData);

this.ds.smethod()
  }
  login(){
    // console.log(a.value);
    // alert("login clicked")
    this.router.navigateByUrl('home')
    
    // alert("login wrks")
  }

}
