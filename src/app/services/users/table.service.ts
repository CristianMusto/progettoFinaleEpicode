import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/classes/client/client';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  getPagedUsers(page: number){
    return this.http.get(environment.apiUrl+`api/clienti?page=${page}&size=20&sort=id,ASC`)
  }

  getById(id: number){
    return this.http.get<Client>(environment.apiUrl+'api/clienti/'+id)
  }

  getClientType(){
    return this.http.get<string[]>(environment.apiUrl+`api/clienti/tipicliente`)
  }

  addClient(client: Client){
    return this.http.post(environment.apiUrl+'api/clienti', client)
  }

  updateUser(client: Client){
    return this.http.put(environment.apiUrl+'api/clienti/'+client.id, client)
  }

  deleteClient(id: number){
    return this.http.delete<Client>(environment.apiUrl+'api/clienti/'+id)
  }

}
