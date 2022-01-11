import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/classes/client/client';
import { Fattura, StatoFattura } from 'src/app/classes/fattura/fattura';
import { FatturaService } from 'src/app/services/fattura/fattura.service';
import { StatoFatturaService } from 'src/app/services/fattura/stato-fattura.service';
import { TableService } from 'src/app/services/users/table.service';

@Component({
  selector: 'app-add-fattura',
  templateUrl: './add-fattura.component.html',
  styleUrls: ['./add-fattura.component.css']
})
export class AddFatturaComponent implements OnInit {

  @Output() onAddFattura = new EventEmitter();
  fattura: Fattura = new Fattura();
  statiFattura: StatoFattura[] = [];
  closeAddFattura : boolean = true;


  constructor(private statoFatturaService: StatoFatturaService, private route : ActivatedRoute, private clientService: TableService, private fatturaService: FatturaService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientService.getById(params['id']).subscribe(data => {
        this.fattura.cliente = data
      })
    })
    this.statoFatturaService.getAll().subscribe((data: any)=> this.statiFattura = data.content);
  }

  creaFattura(fattura: Fattura){
    this.onAddFattura.emit(fattura)
    this.closeAddFattura = false
  }
}
