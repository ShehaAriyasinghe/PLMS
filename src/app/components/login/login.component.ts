import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {HttpClient} from "@angular/common/http";
import {Router, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {CookiemanagerService} from "../../services/cookiemanager.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;
  errorMessage='';

  constructor(private cookieService:CookiemanagerService,
              private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }



  login() {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: (user) =>{
        this.cookieService.createCookie(
          'tokenData',
          email
        );
        console.log('User logged in');
        this.router.navigate(['/dashboard/user']); // navigate to a dashboard or home page after login

    },
    error: (err) => this.errorMessage=err.message

  } )
    console.log(this.errorMessage);

  }

  ngOnInit(): void {
    if(this.cookieService.isExistsCookie('tokenData')){
      this.router.navigateByUrl('/dashboard/user');
    }



  }



}
