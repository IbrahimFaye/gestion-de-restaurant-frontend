import { Component } from '@angular/core';
import { Commande } from '../model/commande';
import { PayementService } from '../service/payement.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payement',
  templateUrl: './enregPayment.component.html',
  styleUrls: ['./payement.component.css']
})
export class enregPayementComponent {
  commandeId:string | null = null;
  veriForm = false;
  tabCommande :Commande []=[];
  searchTerm: string = '';

  burgerForm = this.formBuilder.group({
    montant: ['', Validators.required],
    commande_id: [this.commandeId],
    
  });
  constructor(
    private payementService: PayementService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ){}
  ngOnInit(): void {
   
    this.getCommandeTerminer();
    this.filteredCommandes();

    // Récupérer le paramètre 'id' depuis l'URL
    this.route.paramMap.subscribe(params => {
      this.commandeId = params.get('id');
      console.log('ID du burger:', this.commandeId);
  }); 

  if (this.commandeId) {
    this.burgerForm.patchValue({
      commande_id : this.commandeId
    });
  }
  }

  getCommandeTerminer(){
    this.payementService.getCommandeTerminerSevice().subscribe(
      (data : Commande[] )=>{
        this.tabCommande = data;
       console.log(this.tabCommande.values)
      },
      (error)=>{
        console.log(error)
      }
    );
  }

  filteredCommandes(): any[] {
    if (!this.searchTerm) {
      return this.tabCommande;
    }
    const lowerSearchTerm = this.searchTerm.toLowerCase();
    return this.tabCommande.filter(com =>
      com.nom.toLowerCase().includes(lowerSearchTerm) ||
      com.prenom.toLowerCase().includes(lowerSearchTerm) ||
      com.telephone.toLowerCase().includes(lowerSearchTerm)
    );
  }

  PayementCommande(){
    this.veriForm = true;
    if (this.burgerForm.invalid) {
      return;
    } else {
      
      this.payementService.addPaymentSevice(this.burgerForm.value).subscribe(
        (data) => {
          console.log(data);
          this.payementService.validPayementSevice(this.commandeId).subscribe(
            ()=>{

            },
            ()=>{

            }
          )

          this.router.navigate(['commandeValid']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  
  }
}
