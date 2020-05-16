import { Component, OnInit, NgZone, Input } from '@angular/core';
import {reloj1Service, XsegundoService} from '../start/reloj1.service';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { BLE } from '@ionic-native/ble/ngx';
import { AlertController,ToastController } from '@ionic/angular';
import { ClienteService, Valor } from '../servicio/cliente.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  datos$: Observable<reloj1Service>;
  hora: string;
  minutos: string;
  dia: string;
  fecha: string;
  ampm: string;
  segundos: string;
  devices: any[]=[];
  statusMen: string;
  listo: boolean;

  registro: Valor[];

  constructor(private segundo: XsegundoService, private router: Router,
    private alertCtrl: AlertController, private toastCtrl: ToastController,
    private ngZone: NgZone, private ble: BLE,
    private service: ClienteService) { }
  
    Scan(){
      this.devices = [];
      this.ble.scan([],15).subscribe(
        device => this.onDeviceDiscovered(device)
      );
    }
    onDeviceDiscovered(device){
      console.log('Discovered' + JSON.stringify(device,null,2));
      this.ngZone.run(()=>{
        this.devices.push(device)
        console.log(device)
      })
    }
  help(){
    this.router.navigate(['/help']);
  }
  info(){
    this.router.navigate(['/info']);
  }
  monitor(){
    this.router.navigate(['/monitor']);
    
  }

  ngOnInit() {
    this.datos$=this.segundo.getInfoReloj();
    this.datos$.subscribe(x => {
      this.hora = x.hora;
      this.minutos = x.minutos;
      this.dia = x.diadesemana;
      this.fecha = x.diaymes;
      this.ampm = x.ampm;
      this.segundos = x.segundo
    //this.data=this.status;

    });
  }
  async presentToast( message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      cssClass: 'color'
    });
    toast.present();
  }

    encender(evento){
      let power: boolean = evento.target.checked;
      this.service.actualizar(power).subscribe((data: any)=> {
        console.log(data);
        if (data.status='success'){
          this.listo=power
        }
      })
      if (power) {
        this.presentToast('Bomba encendida')
      } else {
        this.presentToast('Bomba apagada')
      }
  }
  //update(){
    //  this.service.actualizar(status,this.status.estado).subscribe(()=>{
      //status.estado = this.status.estado;
 // });
}