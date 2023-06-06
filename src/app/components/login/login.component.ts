import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  submitForm() {
    if (this.loginForm.valid) {
      console.log('Email:', this.loginForm.value.email);
      console.log('Password:', this.loginForm.value.password);
      // Adăugați logica pentru autentificare aici
    }
  }
}
