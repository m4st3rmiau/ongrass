import { Injectable } from '@angular/core';
import {timer, Observable, Subject} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
  
})
export class reloj1Service {
  hora: string;
  minutos: string;
  ampm: string;
  diadesemana: string;
  diaymes: string;
  segundo: string;
}
export class XsegundoService {
  clock: Observable <Date>;
  infofecha$ = new Subject<reloj1Service>();
  vr: reloj1Service;
  ampm: string;
  hours: number;
  minute: string;
  weekday: string;
  months: string;
  constructor() {
    this.clock = timer(0,1000).pipe(map(t => new Date()),shareReplay(1));
   }
   getInfoReloj(): Observable<reloj1Service>{
     this.clock.subscribe(t => {
      this.hours = t.getHours() % 12;
      this.hours = this.hours ? this.hours : 12;
       this.vr = {
         hora: (t.getHours() < 10) ? '0' + t.getHours() : t.getHours().toString(),
         minutos: (t.getMinutes() < 10) ? '0' + t.getMinutes() : t.getMinutes().toString(),
         ampm: t.getHours() > 11 ? 'PM' : 'AM',
         diaymes: t.toLocaleString('es-MX', { day: '2-digit', month: 'long' }).replace('.', '').replace('-', ' '),
         diadesemana: t.toLocaleString('es-MX', { weekday: 'long' }).replace('.', ''),
         segundo: t.getSeconds() < 10 ? '0' + t.getSeconds() : t.getSeconds().toString()
       }
       this.infofecha$.next(this.vr);
     });
     return this.infofecha$.asObservable();
   }
}
