import { Component, OnInit } from '@angular/core';
import { Provincia } from 'src/app/classes/client/client';
import { ProvinciaService } from 'src/app/services/provincia/provincia.service';
@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {

  provincia: Provincia[] = [];
  openAddP : boolean = false;

  selectedProvincia!:Provincia; 
  openEdit:boolean = false;

  constructor(private provinceService: ProvinciaService) { }

  ngOnInit(): void {
    this.provinceService.getProvince().subscribe((data:any)=>{
      console.log(data);
      this.provincia = data.content;
    })
  }

  addProvincia(provincia: Provincia){
    this.provinceService.addProvincia(provincia).subscribe((data:any)=>{
      this.provincia.push(provincia)
      console.log(data);
    })
  }

  selectProvincia(provincia: Provincia){
    this.selectedProvincia = provincia;
    this.openEdit = true;
  }

  closeEdit(){
    this.openEdit = false;
  }

  deleteProvincia(provincia: Provincia){
    console.log(provincia);
    this.provinceService.deleteProvincia(provincia.id).subscribe(res=>{
      this.provincia = this.provincia.filter(p => p.id !== provincia.id)
      console.log(res);
    })
  }

  openAdd(e:any){
    e.preventDefault();

    if(this.openAddP === false){
      this.openAddP = true;
    }else {
      this.openAddP = false;
    }
  }

}
