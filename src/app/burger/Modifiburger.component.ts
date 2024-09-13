import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BurgerService } from '../service/burger.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-burger',
  templateUrl: './Modifiburger.component.html',
  styleUrls: ['./burger.component.css']
})
export class ModifiburgerComponent implements OnInit {
  idBurger!:any
  veriForm = false;
  burgerForm = this.formBuilder.group({
    id: [''],
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
    private router: Router,
    private route: ActivatedRoute,

  ) {}

  ngOnInit(): void {
    // Récupérer le paramètre 'id' depuis l'URL
    this.route.paramMap.subscribe(params => {
      this.idBurger = params.get('id');
      this.burgerService.getBurgerByIdSevice(this.idBurger).subscribe(
        (data)=>{
          console.log(data)
          this.burgerForm.get("id")?.setValue(""+data.id)
          this.burgerForm.get("nom")?.setValue(""+data.nom)
          this.burgerForm.get("description")?.setValue(""+data.description)
          this.burgerForm.get("prix")?.setValue(""+data.prix)

        },
        (Error)=>{

        }
      )
    }); 

  
  }

  
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.burgerForm.patchValue({
        photo: file
      });
    }
  }

  modifiBurger() {
    this.veriForm = true;
    if (this.burgerForm.invalid) {
      return;
    } else {
      const formData = new FormData();
      
      formData.append('id', this.burgerForm.get('id')?.value || '');
      formData.append('nom', this.burgerForm.get('nom')?.value || '');
      formData.append('description', this.burgerForm.get('description')?.value || '');
      formData.append('prix', this.burgerForm.get('prix')?.value || '');
      formData.append('photo', this.burgerForm.get('photo')?.value || '');
      formData.append('etat', this.burgerForm.get('etat')?.value || '1');
      console.log(formData)
      this.burgerService.UpdateBurgerSevice(formData).subscribe(
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