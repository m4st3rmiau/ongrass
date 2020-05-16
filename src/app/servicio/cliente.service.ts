import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Valor {
  estado: string;
  registro: string;
}


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //private url = 'http://localhost/API/api/bomba.php';
  private url = 'https://designylove.com/bomba.php';
 
  constructor( private http: HttpClient) { }

    actualizar(estado: any){
    let body = new FormData();
    body.append('estado', estado);
    return this.http.post(this.url,body)
     //return this.http.post(this.url, body);
    //return this.http.post(this.url,this.valor);
  }
  obtenerTodo(){
    return this.http.get<[Valor]>(this.url);
  }
}
