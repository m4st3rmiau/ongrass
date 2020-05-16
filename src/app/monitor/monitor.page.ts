import { Component, OnInit } from '@angular/core';
import { ClienteService, Valor } from '../servicio/cliente.service';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.page.html',
  styleUrls: ['./monitor.page.scss'],
})
export class MonitorPage implements OnInit {

registro: Valor[];
chart: Valor [];

constructor( private service: ClienteService, private router: Router) { }


ionRefresh(event) {
  console.log('Pull Event Triggered!');
  setTimeout(() => {
    this.service.obtenerTodo().subscribe(response =>{
      this.registro=response;
      setTimeout(()=>{
        this.registro
      },1000)
    });

    //complete()  signify that the refreshing has completed and to close the refresher
    event.target.complete();
  }, 2000);
}
ionPull(event){
//Emitted while the user is pulling down the content and exposing the refresher.
this.service.obtenerTodo().subscribe(response =>{
  this.registro=response;
  setTimeout(()=>{
    this.registro
  },1000)
});
}
ionStart(event){
//Emitted when the user begins to start pulling down.
console.log('ionStart Event Triggered!');
}

ngOnInit() {
    this.service.obtenerTodo().subscribe(response =>{
      this.registro=response;
      setTimeout(()=>{
        this.registro
      },1000)
    });

    
    this.showChart();
  }
  navigate(){
    this.router.navigate(['start'])
  }


  showChart() {
    var ctx = (<any>document.getElementById('yudhatp-chart')).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['dia 1', 'dia 2', 'dia 3', 'dia 4', 'dia 5', 'dia 6','dia 7','dia 8','dia 9','dia 10'],
            datasets: [{
                label: 'Humedad diaria',
                data: [291,421,427,320,285,291,221,291,119,291,420,421,120,320,450,489,100,291,430,431],
                backgroundColor: [
                    'rgb(240, 247, 234,0.7)',
                ],
                borderColor: [
                    'rgb(106, 131, 88 ,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  }
}
