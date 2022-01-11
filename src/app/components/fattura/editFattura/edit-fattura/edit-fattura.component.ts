import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Fattura, StatoFattura } from 'src/app/classes/fattura/fattura';
import { FatturaService } from 'src/app/services/fattura/fattura.service';
import { StatoFatturaService } from 'src/app/services/fattura/stato-fattura.service';

@Component({
  selector: 'app-edit-fattura',
  templateUrl: './edit-fattura.component.html',
  styleUrls: ['./edit-fattura.component.css']
})
export class EditFatturaComponent implements OnInit {

  @Output() onEditFattura = new EventEmitter();
  @Input() editingFattura!: Fattura
  fattura: Fattura = new Fattura();
  statoFatture: StatoFattura[] = [];

  constructor(private fatturaService: FatturaService, private statoFatturaService: StatoFatturaService) { }

  ngOnInit(): void {
    this.fattura = this.editingFattura
    this.statoFatturaService.getAll().subscribe((data:any) => {
      this.statoFatture = data.content
      console.log(this.statoFatture);
    })
  }

  editFattura(fattura: Fattura){
    this.fatturaService.updateFattura(fattura).subscribe((data:any) => {
      console.log(data);
      this.onEditFattura.emit(fattura)
    })
  }

}
