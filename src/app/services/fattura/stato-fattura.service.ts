import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatoFatturaService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(environment.apiUrl+'api/statifattura')
  }

  getStatoFatturaById(id : number){
    return this.http.get(environment.apiUrl+'api/statifattura/'+id)
  }
}
