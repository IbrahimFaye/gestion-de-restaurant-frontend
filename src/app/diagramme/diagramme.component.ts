import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { PayementService } from '../service/payement.service';
import { VenteMensuelle } from '../model/vente.model';

@Component({
  selector: 'app-diagramme',
  templateUrl: './diagramme.component.html',
  styleUrls: ['./diagramme.component.css']
})
export class DiagrammeComponent {
  public chart: any;
  mois !: number;  
  total!: number;

  constructor(
    private payementService : PayementService,
  ){}

  ngOnInit(): void {
    this.createChart();
  }

  /* createChart(){
  
    this.payementSrvice.venteMensuelles().subscribe(data => {
      console.log(data);  // Vérifiez le format des données ici
      const mois = data.map((d: VenteMensuelle) => {
        const date = new Date(d.date);
        const options: Intl.DateTimeFormatOptions = { month: 'short' };  // ou 'long'
        return date.toLocaleDateString('fr-FR', options);
      });
            const montants = data.map((d: VenteMensuelle) => d.total);

      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: mois,
          datasets: [{
            label: 'Ventes Mensuelles',
            data: montants,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
      
  } */


    createChart() {
      this.payementService.venteMensuelles().subscribe(
        (donnee: { mois: string; total: string }[]) => {    
          // Transformer les données en labels et en données du graphique
          const mois = donnee.map(d => {
            const date = new Date(0);
            date.setMonth(parseInt(d.mois) - 1); // Convertir mois en nombre
            const options: Intl.DateTimeFormatOptions = { month: 'short' }; 
            return date.toLocaleDateString('fr-FR', options);
          });
          const montants = donnee.map(d => parseFloat(d.total)); // Convertir total en nombre
    
          this.chart = new Chart('MyChart', {
            type: 'bar',
            data: {
              labels: mois, // Abscisse
              datasets: [
                {
                  label: 'Montants',
                  data: montants, // Données
                  backgroundColor: 'blue'
                }
              ]
            },
            options: {
              aspectRatio: 2.5, 
              
            }
          });
        },
        (error) => {
          console.error('Erreur lors de la création du graphique:', error);
        }
      );
    }
}
