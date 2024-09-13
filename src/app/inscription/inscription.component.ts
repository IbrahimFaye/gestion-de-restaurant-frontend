import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConnexionService } from '../service/connexion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  veriForm = false;
  UserForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private connexionService: ConnexionService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  resister() {
    this.veriForm = true;
    if (this.UserForm.invalid) {
      return;
    } else {
      this.connexionService.resiterSevice(this.UserForm.value).subscribe(
        (data)=>{
            console.log(data);
            this.router.navigate(['connexion']);
        },
        ()=>{

        }
      )
    }
  }

 
}
