import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommandeService } from '../service/commande.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-commande',
  templateUrl: './enregCommande.component.html',
  styleUrls: ['./commande.component.css']
})
export class EnregCommandeComponent implements OnInit {
  burgerId: string | null = null;

  veriForm = false;
    burgerForm = this.formBuilder.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    email: ['', Validators.required],
    telephone: [''],
    burger_id: [this.burgerId],
    etat: ['en cour'],
  });
  constructor(
    private commandeService: CommandeService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  )
 

   {}
  ngOnInit(): void {
      // Récupérer le paramètre 'id' depuis l'URL
      this.route.paramMap.subscribe(params => {
        this.burgerId = params.get('id');
        console.log('ID du burger:', this.burgerId);
    }); 

    if (this.burgerId) {
      this.burgerForm.patchValue({
        burger_id : this.burgerId
      });
    }
 }

addCommande() {
    this.veriForm = true;
    if (this.burgerForm.invalid) {
      return;
    } else {
      
      this.commandeService.addCommandeSevice(this.burgerForm.value).subscribe(
        (data) => {
          console.log(data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "commande enregistrer",
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
