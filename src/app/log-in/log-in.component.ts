import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  hide:boolean = true;
  constructor(private router: Router){}
  // constructor(private formBuilder:FormBuilder){}

  // loginForm = this.formBuilder.group({
  //   email : ['',[Validators.required, Validators.email]],
  //   password : ['', Validators.required]
  // })


  // email = new FormControl('', [Validators.required, Validators.email]);
  // password = new FormControl('', Validators.required);
  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not valid ' : '';
  // }

  onLogIn(){
    this.router.navigate(['/form'])
  }

}
