import { Component } from '@angular/core';
import { Commande } from '../model/commande';
import { PayementService } from '../service/payement.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent {

    
  tabCommande :Commande []=[];
  searchTerm: string = '';
  burgerForm = this.formBuilder.group({
    montant: ['', Validators.required],
   // commande_id: [this.commandeId],
    
  });
  constructor(
    private payementService: PayementService,
    private formBuilder: FormBuilder,
  ){}
  ngOnInit(): void {
    this.getCommandeTerminer();
    this.filteredCommandes();
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

 
}
