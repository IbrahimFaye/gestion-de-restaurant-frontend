import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgerComponent } from './burger/burger.component';
import { AjouterburgerComponent } from './burger/Ajouterburger.component';
import { CommandeComponent } from './commande/commande.component';
import { EnregCommandeComponent } from './commande/enregCommande.component';
import { PayementComponent } from './payement/payement.component';
import { enregPayementComponent } from './payement/enregPayement.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { StatComponent } from './stat/stat.component';
import { StatCommandeComponent } from './stat/statcommande.component';
import { DiagrammeComponent } from './diagramme/diagramme.component';
import { ModifiburgerComponent } from './burger/Modifiburger.component';

const routes: Routes = [
  { path:'', component: BurgerComponent },
  { path:'ajouterBurger', component: AjouterburgerComponent },
  { path:'commande', component: CommandeComponent },
  { path:'enregBurger/:id', component: EnregCommandeComponent },
  { path:'commandeValid', component: PayementComponent },
  { path:'payement/:id', component: enregPayementComponent },
  { path:'inscription', component: InscriptionComponent },
  { path:'connexion', component: ConnexionComponent },
  { path:'stat', component: StatComponent },
  { path:'commandeValide/:id', component: StatCommandeComponent },
  { path:'commandeAnnuler/:id', component: StatCommandeComponent },
  { path:'commandeEnCour/:id', component: StatCommandeComponent },
  { path:'diagramme', component: DiagrammeComponent },
  { path:'modifiBurger/:id', component: ModifiburgerComponent },



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
