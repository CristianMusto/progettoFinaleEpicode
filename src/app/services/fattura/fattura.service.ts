import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/classes/client/client';
import { Fattura } from 'src/app/classes/fattura/fattura';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FatturaService {

  constructor(private http : HttpClient) { }

  getFattureByClient(id: number, page: number){
    return this.http.get<Fattura[]>(environment.apiUrl+'api/fatture/cliente/'+id+'?page='+page)
  }

  getAll(){
    return this.http.get<Fattura[]>(environment.apiUrl+'api/fatture')
  }

  createFattura(fattura: Fattura){
    return this.http.post(environment.apiUrl+'api/fatture', fattura)
  }

  updateFattura(fattura: Fattura){
    return this.http.put(environment.apiUrl+'api/fatture/'+fattura.id, fattura)
  }

  deleteFattura(id:number){
    return this.http.delete<Fattura>(environment.apiUrl+'api/fatture/'+id)
  }
}
