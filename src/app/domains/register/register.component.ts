import { Component, inject } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    RouterLink,
    ReactiveFormsModule
  ],  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
    registerForm: FormGroup;
  
    router = inject(Router);
    authService = inject(AuthService);
    fb = inject(FormBuilder);
  
    constructor(){
      this.registerForm = this.fb.group({
        email : ['', [Validators.required, Validators.email]],
        password : ['', [Validators.required, Validators.minLength(6)]]
      });
    }
  
    async onSubmit(){
      console.log(this.registerForm.value);
      if(this.registerForm.valid){
        const {email, password} = this.registerForm.value;
        try {
          await this.authService.register({email, password});
          this.router.navigate(['/']);
        } catch (error) {
          console.error(error);
        }
      }
    }
}
