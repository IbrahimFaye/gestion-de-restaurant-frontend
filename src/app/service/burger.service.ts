import { Injectable } from '@angular/core';
import { Burger } from '../model/burger';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../model/commande';
import { buffer } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  constructor(private httpClient : HttpClient) { }
  getBurgerSevice(){
    return this.httpClient.get<Burger[]>(`${environment.apiUrl}/burger`);
  }
  deleteBurgerSevice(id:any){
    return this.httpClient.delete(`${environment.apiUrl}/burger/+id`);
  }
  addBurgerSevice(burger:any){
    return this.httpClient.post<Burger>(`${environment.apiUrl}/burger`,burger);
  }
  getBurgerByIdSevice(id:any){
    return this.httpClient.get<Burger>(`${environment.apiUrl}/burger/`+id);
  }

  UpdateBurgerSevice(burger: FormData) {
    // Note: Pas besoin d'inclure l'ID dans l'URL si l'ID est déjà inclus dans 'FormData'
    return this.httpClient.put(`${environment.apiUrl}/burger/`+ (burger.get('id') || ''), burger);
  }
}
