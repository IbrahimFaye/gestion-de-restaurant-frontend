import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../model/commande';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private httpClient : HttpClient) { }
 
  addCommandeSevice(commande:any){
    return this.httpClient.post<Commande>('http://127.0.0.1:8000/api/commande',commande)
  }

  getCommandeImpayeSevice():Observable<Commande[]>{
    return this.httpClient.get<Commande[]>('http://127.0.0.1:8000/api/commande')
  }

  getCommandeByIdService(id:number):Observable<Commande>{
    return this.httpClient.get<Commande>('http://127.0.0.1:8000/api/commande'+id)
  }

  deleteCommandeSevice(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/commande/'+id)
  }

  updateCommandeSevice(id:any){
    return this.httpClient.get<Commande>('http://127.0.0.1:8000/api/valideCom/'+id)
  }

  getCommandeAnnulerSevice():Observable<Commande[]>{
    return this.httpClient.get<Commande[]>('http://127.0.0.1:8000/api/commandeAnnuler')
  }
  
  getRecetteSevice():Observable<number>{
    return this.httpClient.get<number>('http://127.0.0.1:8000/api/recette')
  }
}
