import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../service/commande.service';
import { Commande } from '../model/commande';
import { FormBuilder } from '@angular/forms';
import { BurgerService } from '../service/burger.service';
import { Burger } from '../model/burger';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  tabCommande :Commande []=[];
  tabBurger : Burger[]=[];
  searchTerm: string = '';
  burgerMap = new Map<number, string>();

  constructor(
    private commandeService: CommandeService,
    private burgerService: BurgerService,
    //private formBuilder: FormBuilder,

  ){}
  ngOnInit(): void {
    this.getCommande();
    this.filteredCommandes();
    this.getBurger();

  }

  getCommande(){
    
    this.commandeService.getCommandeImpayeSevice().subscribe(
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
      com.etat.toLowerCase().includes(lowerSearchTerm) ||
      com.burger_id.toString().includes(lowerSearchTerm)
    );
  }

  annulerCommande(id:any){
        this.commandeService.deleteCommandeSevice(id).subscribe(
          ()=>{
            this.getCommande();
          },
          ()=>{

          }
        )
      }
  

  TerminerCommande(id:any){
    console.log(id)
    console.log("isi");
    this.commandeService.updateCommandeSevice(id).subscribe(
      ()=>{
        
        this.getCommande();
      },
      ()=>{

      }
    )
  
  }

  getBurger(){
    
   this.burgerService.getBurgerSevice().subscribe(
      (data : Burger[] )=>{
        this.tabBurger = data;
        this.burgerMap = new Map(this.tabBurger.map(b => [b.id, b.nom]));
       console.log(this.tabBurger.values)
      },
      (error)=>{
        console.log(error)
      }
    );
  }
}
