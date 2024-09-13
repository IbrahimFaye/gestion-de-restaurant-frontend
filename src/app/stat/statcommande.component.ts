import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../service/commande.service';
import { Commande } from '../model/commande';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StatCommandeService } from '../service/statcommande.service';

@Component({
  selector: 'app-stat',
  templateUrl: './statCommande.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatCommandeComponent implements OnInit {
  parametre!:any
  tabCommande :Commande []=[];
  searchTerm: string = '';
  constructor(
    private route: ActivatedRoute,
    private statCommande : StatCommandeService

    //private formBuilder: FormBuilder,

  ){}
  ngOnInit(): void {

    // Récupérer le paramètre 'id' depuis l'URL
    this.route.paramMap.subscribe(params => {
      this.parametre = params.get('id');
      console.log('le parametre est:', this.parametre);
      this.getCommande();
  })
}

  getCommande(){
    console.log(this.parametre)

    if(this.parametre=="annuler"){
        this.statCommande.getCommandeAnnulerSevice().subscribe(
          (data:Commande[])=>{
            console.log(data)
            this.tabCommande=data
          },
          (error)=>{
            console.log(error)
          }
        )
      }
    else if(this.parametre=="valide"){
      this.statCommande.getCommandeValideSevice().subscribe(
        (data:Commande[])=>{
          console.log(data)
          this.tabCommande=data
        },
        (error)=>{
          console.log(error)
        }
      )
    }
    else if(this.parametre=="enCour"){
      this.statCommande.getCommandeEnCourSevice().subscribe(
        (data:Commande[])=>{
          console.log(data)
          this.tabCommande=data
        },
        (error)=>{
          console.log(error)
        }
      )
      }
    
  }
  

 
}
