import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router, RouterModule} from "@angular/router";
import {AuthService} from "../../services/auth.service";

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.registerForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]],
      role: ['',[Validators.required]]
    });
  }




  register() {
    if (this.registerForm.valid) {
      const {email, password, role} = this.registerForm.value;
      this.authService.register(email, password, role).subscribe({
        next: () => this.router.navigate(['/dashboard/login']),
        // navigate to the login page after registration
        error:(err) => this.errorMessage=err.message
      })
      console.log(this.errorMessage);
    }
  }
}
