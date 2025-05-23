import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  veriForm = false;

  UserForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  login() {
    this.veriForm = true;
    if (this.UserForm.invalid) {
      return;
    }

    const email = this.UserForm.value.email;
    const password = this.UserForm.value.password;

    if (email && password) {
      this.authService.login(email, password).subscribe(
        (data) => {
          console.log("Connecté");
          this.router.navigate(['']); 
        },
        (error) => {
          console.error('Erreur de connexion', error);
        }
      );
    } else {
      console.error('Les champs email ou mot de passe sont vides');
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
}