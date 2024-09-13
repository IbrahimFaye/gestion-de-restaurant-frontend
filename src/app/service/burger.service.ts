import { Injectable } from '@angular/core';
import { Burger } from '../model/burger';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../model/commande';
import { buffer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  constructor(private httpClient : HttpClient) { }
  getBurgerSevice(){
    return this.httpClient.get<Burger[]>('http://127.0.0.1:8000/api/burger');
  }
  deleteBurgerSevice(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/burger/'+id);
  }
  addBurgerSevice(burger:any){
    return this.httpClient.post<Burger>('http://127.0.0.1:8000/api/burger',burger);
  }
  getBurgerByIdSevice(id:any){
    return this.httpClient.get<Burger>('http://127.0.0.1:8000/api/burger/'+id);
  }

  UpdateBurgerSevice(burger: FormData) {
    // Note: Pas besoin d'inclure l'ID dans l'URL si l'ID est déjà inclus dans 'FormData'
    return this.httpClient.put('http://127.0.0.1:8000/api/burger/'+ (burger.get('id') || ''), burger);
  }
}
