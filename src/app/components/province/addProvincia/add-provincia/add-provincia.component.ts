import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Comuni, Provincia } from 'src/app/classes/client/client';

@Component({
  selector: 'app-add-provincia',
  templateUrl: './add-provincia.component.html',
  styleUrls: ['./add-provincia.component.css']
})
export class AddProvinciaComponent implements OnInit {

  @Output() onAddProvincia = new EventEmitter();
  provincia: Provincia = new Provincia('','');
  closeAddProvincia : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  creaProvincia(provincia : Provincia){
    this.onAddProvincia.emit(provincia)
    this.closeAddProvincia = false;
  }

}
