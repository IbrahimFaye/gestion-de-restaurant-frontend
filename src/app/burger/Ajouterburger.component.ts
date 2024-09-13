import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BurgerService } from '../service/burger.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-burger',
  templateUrl: './Ajouterburger.component.html',
  styleUrls: ['./burger.component.css']
})
export class AjouterburgerComponent implements OnInit {
  veriForm = false;
  burgerForm = this.formBuilder.group({
    nom: ['', Validators.required],
    description: ['', Validators.required],
    prix: ['', Validators.required],
    photo: [null],
    etat: ['1'],
  });

  constructor(
    private httpClient: HttpClient,
    private burgerService: BurgerService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.burgerForm.patchValue({
        photo: file
      });
    }
  }

  addBurger() {
    this.veriForm = true;
    if (this.burgerForm.invalid) {
      return;
    } else {
      const formData = new FormData();
      formData.append('nom', this.burgerForm.get('nom')?.value || '');
      formData.append('description', this.burgerForm.get('description')?.value || '');
      formData.append('prix', this.burgerForm.get('prix')?.value || '');
      formData.append('photo', this.burgerForm.get('photo')?.value || '');
      formData.append('etat', this.burgerForm.get('etat')?.value || '1');

      this.burgerService.addBurgerSevice(formData).subscribe(
        (data) => {
          
          console.log(data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Ajout avec success",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}