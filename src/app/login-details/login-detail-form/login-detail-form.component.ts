import { Component, OnInit } from '@angular/core';
import { LoginDetailService } from 'src/app/shared/login-detail.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login-detail-form',
  templateUrl: './login-detail-form.component.html',
  styles: [
  ]
})
export class LoginDetailFormComponent implements OnInit {

  constructor(public service: LoginDetailService) { }
  
    ngOnInit(): void {
    }
  
    onSubmit(form:NgForm){
      this.service.Login().subscribe(
        res =>{
          alert(res);
          //console.log(res);
        },
        err => {
          //console.log(err);
          alert(err);
        }
      )
  
    };
  
}
