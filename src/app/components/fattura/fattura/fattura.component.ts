import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/classes/client/client';
import { Fattura, StatoFattura } from 'src/app/classes/fattura/fattura';
import { FatturaService } from 'src/app/services/fattura/fattura.service';
import { StatoFatturaService } from 'src/app/services/fattura/stato-fattura.service';

@Component({
  selector: 'app-fattura',
  templateUrl: './fattura.component.html',
  styleUrls: ['./fattura.component.css']
})
export class FatturaComponent implements OnInit {

  fatture: Fattura[] = [];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];
  clientId!: number;
  openFattura: boolean = false;

  selectedFattura!:Fattura; 
  openEdit:boolean = false;

  date : Date = new Date();

  constructor(private fatturaService: FatturaService, private route: ActivatedRoute, private router: Router, private statiFatturaService : StatoFatturaService) { }

  ngOnInit(): void {
    this.getFattureByClient()
    console.log(this.fatture);
  }

  getFattureByClient(){
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.fatturaService.getFattureByClient(params['id'], params['page']).subscribe((data:any) => {
        this.clientId = params['id'];
        console.log(data.content);
        this.fatture = data.content;

        this.totalElements = data.totalElements
        this.size = data.size
        this.numberOfPages = Math.round(data.totalElements / data.size)


        for(let i = 0; i <= this.numberOfPages; i++){
          console.log(i);
          this.pageNumbers.push(i);
        }

      })
    })
  }

  addFattura(fattura: Fattura){
    this.statiFatturaService.getStatoFatturaById(fattura.id).subscribe((data:any) => {
      console.log(data);
      fattura.stato = data
      this.fatturaService.createFattura(fattura).subscribe((data:any) => {
        console.log(data);
        this.fatture.push(fattura);
        console.log(fattura);
      })
    })
  }

  selectFattura(fattura: Fattura){
    this.selectedFattura = fattura;
    this.openEdit = true;
  }

  closeEdit(){
    this.openEdit = false;
  }

  deleteFattura(fattura: Fattura){
    this.fatturaService.deleteFattura(fattura.id).subscribe(data => {
      this.fatture.splice(this.fatture.indexOf(fattura), 1)
      console.log(data);
    })
  }

  openAdd(e:any){
    e.preventDefault();
    if(this.openFattura === false){
      this.openFattura = true
    }else {
      this.openFattura = false;
    }
  }

}
