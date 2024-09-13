import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importer FormsModule ici
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerComponent } from './burger/burger.component';
import { CommandeComponent } from './commande/commande.component';
import { HttpClientModule } from '@angular/common/http';
import { AjouterburgerComponent } from './burger/Ajouterburger.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EnregCommandeComponent } from './commande/enregCommande.component';
import { PayementComponent } from './payement/payement.component';
import { enregPayementComponent } from './payement/enregPayement.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { StatComponent } from './stat/stat.component';
import { StatCommandeComponent } from './stat/statcommande.component';
import { DiagrammeComponent } from './diagramme/diagramme.component';
import { ModifiburgerComponent } from './burger/Modifiburger.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    CommandeComponent,
    AjouterburgerComponent,
    EnregCommandeComponent,
    PayementComponent,
    enregPayementComponent,
    InscriptionComponent,
    ConnexionComponent,
    InscriptionComponent,
    ConnexionComponent,
    StatComponent,
    StatCommandeComponent,
    DiagrammeComponent,
    ModifiburgerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
