import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provincia } from 'src/app/classes/client/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private http : HttpClient) { }

  getProvinciaById (id: number){
    return this.http.get(environment.apiUrl+'api/province/'+id)
  }

  getProvince(){
    return this.http.get(environment.apiUrl+'api/province')
  }

  addProvincia(provincia: Provincia){
    return this.http.post(environment.apiUrl+'api/province', provincia)
  }

  deleteProvincia(id: number){
    return this.http.delete(environment.apiUrl+'api/province/'+id)
  }

  updateProvincia(provincia: Provincia){
    return this.http.put(environment.apiUrl+'api/province/'+provincia.id, provincia)
  }
}
