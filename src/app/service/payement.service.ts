import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../model/commande';
import { Observable } from 'rxjs';
import { Payement } from '../model/Payement';
import { VenteMensuelle } from '../model/vente.model';

@Injectable({
  providedIn: 'root'
})
export class PayementService {

  constructor(private httpClient : HttpClient) { }
 
  
  getCommandeTerminerSevice():Observable<Commande[]>{
    return this.httpClient.get<Commande[]>('http://127.0.0.1:8000/api/commandeTerminer')
  }
 addPaymentSevice(payement:any){
    return this.httpClient.post<Payement>('http://127.0.0.1:8000/api/payement',payement)
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
  validPayementSevice(id:any){
    return this.httpClient.get<Commande>('http://127.0.0.1:8000/api/validePay/'+id)
  }

  venteMensuelles():Observable<any>{
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/ventesMensuelles')
  }
}
