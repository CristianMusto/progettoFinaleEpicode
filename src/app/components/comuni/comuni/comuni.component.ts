import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Comuni } from 'src/app/classes/client/client';
import { ComuniService } from 'src/app/services/comuni/comuni.service';
import { ProvinciaService } from 'src/app/services/provincia/provincia.service';

@Component({
  selector: 'app-comuni',
  templateUrl: './comuni.component.html',
  styleUrls: ['./comuni.component.css']
})
export class ComuniComponent implements OnInit {

  comuni: Comuni[] = [];
  openComuni: boolean = false;
  selectedComune!:Comuni; 
  openEdit:boolean = false;

  constructor(private comuniService: ComuniService, private router: Router, private provinciaService : ProvinciaService) { }

  ngOnInit(): void {
    this.comuniService.getComuni().subscribe((data:any)=>{
      console.log(data);
      this.comuni = data.content;
    })
  }
  addComune(comune : Comuni){
    this.provinciaService.getProvinciaById(comune.provincia.id).subscribe((data:any) => {
      comune.provincia = data
      this.comuniService.creaComune(comune).subscribe((data:any) => {
        console.log(data);
        this.comuni.push(comune);
        console.log(comune);
      })
    })
  }

  selectComune(comune: Comuni){
    this.selectedComune = comune;
    this.openEdit = true;
  }

  closeEdit(){
    this.openEdit = false;
  }

  deleteComune(comune: Comuni){
    console.log(comune);
    this.comuniService.deleteComune(comune.id).subscribe(res=>{
      this.comuni = this.comuni.filter(c => c.id !== comune.id)
      console.log(res);
    })
  }

  openAdd(e:any){
    e.preventDefault();

    if(this.openComuni === false){
      this.openComuni = true
    }else {
      this.openComuni = false
    }
  }

}
