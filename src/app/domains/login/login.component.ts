import { Component, inject } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  router = inject(Router);
  authService = inject(AuthService);
  fb = inject(FormBuilder);

  constructor(){
    this.loginForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onSubmit(){
    console.log(this.loginForm.value);
    if(this.loginForm.valid){
      const {email, password} = this.loginForm.value;
      try {
        await this.authService.login({email, password});
        this.router.navigate(['/todos']);
      } catch (error) {
        console.error(error);
      }
    }
  }


}
