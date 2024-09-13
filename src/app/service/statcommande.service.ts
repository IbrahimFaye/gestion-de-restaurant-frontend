import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../model/commande';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatCommandeService {

  constructor(private httpClient : HttpClient) { }
 
  getCommandeAnnulerSevice():Observable<Commande[]>{
    return this.httpClient.get<Commande[]>('http://127.0.0.1:8000/api/listcommandeAnnuler')
  }
  getCommandeValideSevice():Observable<Commande[]>{
    return this.httpClient.get<Commande[]>('http://127.0.0.1:8000/api/listcommandeValide')
  }
  getCommandeEnCourSevice():Observable<Commande[]>{
    return this.httpClient.get<Commande[]>('http://127.0.0.1:8000/api/listcommandeEnCour')
  }
  
  getRecetteSevice():Observable<number>{
    return this.httpClient.get<number>('http://127.0.0.1:8000/api/recette')
  }
}
