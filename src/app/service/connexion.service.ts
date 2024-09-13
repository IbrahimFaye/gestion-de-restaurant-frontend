import { Injectable } from '@angular/core';
import { Burger } from '../model/burger';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../model/commande';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private httpClient : HttpClient) { }
  getBurgerSevice(){
    return this.httpClient.get<Burger[]>('http://127.0.0.1:8000/api/burger')
  }
  loginSevice(user:any){
    return this.httpClient.post<User>('http://127.0.0.1:8000/api/login',user)
  }
  resiterSevice(user:any){
    return this.httpClient.post<User>('http://127.0.0.1:8000/api/register',user)
  }
 
}
