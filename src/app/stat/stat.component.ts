import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../service/commande.service';
import { Commande } from '../model/commande';
import { PayementService } from '../service/payement.service';
import { StatCommandeService } from '../service/statcommande.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  tabCommande : Commande[]=[]
  tabCommandeValide : Commande[]=[]
  tabCommandeAnnuler : Commande[]=[]

  commandeEnCour : number =0
  commandeValide :number =0
  commandeAnnuler :number =0
  recette : number=0



constructor(
  private stacommandeService:StatCommandeService,
  private commandeService : CommandeService,
  private comServiceTerminer : PayementService,

){}
  ngOnInit(): void {
this.getCommandeEnCour()
this.getCommandeValide()
this.getCommandeAnnuler()
this.getRecette();
  }

  getCommandeEnCour(){
    this.stacommandeService.getCommandeEnCourSevice().subscribe(
      (data : Commande[] )=>{
        this.tabCommande = data;
        this.commandeEnCour = this.tabCommande.length;
      },
      (error)=>{
        console.log(error)
      }
    );
  }

  getCommandeValide(){
    this.stacommandeService.getCommandeValideSevice().subscribe(
      (data : Commande[] )=>{
        this.tabCommandeValide = data;
        this.commandeValide = this.tabCommandeValide.length;
      },
      (error)=>{
        console.log(error)
      }
    );
  }
  getCommandeAnnuler(){
    this.stacommandeService.getCommandeAnnulerSevice().subscribe(
      (data : Commande[] )=>{
        this.tabCommandeAnnuler = data;
        this.commandeAnnuler = this.tabCommandeAnnuler.length;
      },
      (error)=>{
        console.log(error)
      }
    );
  }

  getRecette(){
    this.commandeService.getRecetteSevice().subscribe(
      (data : number)=>{
        this.recette = data;
      },
      (error)=>{
        console.log(error)
      }
    );
  }

}
