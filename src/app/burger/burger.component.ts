import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Burger } from '../model/burger';
import { BurgerService } from '../service/burger.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {
  isLoggedIn!: boolean ;
  tabBurger:Burger [] = [];
 constructor(
  private httpClient: HttpClient,
  private burgerService : BurgerService,
  private router: Router,
  private authService: AuthService

 ){
      
 }
  ngOnInit(): void {
   this.getAllBurger();
   this.isLoggedIn = this.authService.isLoggedIn; 

  }
  getAllBurger(){
    this.burgerService.getBurgerSevice().subscribe(
      (data : Burger[])=>{
        this.tabBurger=data;
       console.log(this.tabBurger.values)
      },
      (error)=>{
        console.log(error)
      }
    );
  }
  commandeBurger(id:any){
    this.router.navigate(['']);
  }
  modifiBurger(id:any){

  }
  archiveBurger(id:any){
    console.log(id)
    Swal.fire({
      title: "Etes vous Sure?",
      text: "vous aller Archiver ce Burger!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "oui , Archivé!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.burgerService.deleteBurgerSevice(id).subscribe(
          ()=>{
           
            this.getAllBurger();
          },
          ()=>{
    
          }
        )
        Swal.fire({
          
          title: "Archivé!",
          text: "le Burger à été archivé.",
          icon: "success"
        });
      }
    });
    
  }
}
