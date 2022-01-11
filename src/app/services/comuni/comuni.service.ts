import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comuni } from 'src/app/classes/client/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  comuniS : Comuni[] = [];

  constructor(private http: HttpClient) { }

  getComuneById (id: number){
    return this.http.get(environment.apiUrl+'api/comuni/'+id)
  }

  getComuni(){
    return this.http.get(environment.apiUrl+'api/comuni')
  }

  creaComune(comune: Comuni){
    return this.http.post(environment.apiUrl+'api/comuni', comune)
  }

  updateComune(comune: Comuni){
    return this.http.put(environment.apiUrl+'api/comuni/'+comune.id, comune)
  }

  deleteComune(id: number){
    return this.http.delete(environment.apiUrl+'api/comuni/'+id)
  }
}
