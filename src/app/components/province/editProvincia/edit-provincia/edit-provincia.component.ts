import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Provincia } from 'src/app/classes/client/client';
import { ProvinciaService } from 'src/app/services/provincia/provincia.service';

@Component({
  selector: 'app-edit-provincia',
  templateUrl: './edit-provincia.component.html',
  styleUrls: ['./edit-provincia.component.css']
})
export class EditProvinciaComponent implements OnInit {

  @Output() onEditProvincia = new EventEmitter();
  @Input() editingProvincia!: Provincia
  provincia: Provincia = new Provincia('','');
  closeEdit : boolean = true

  constructor(private provinciaService: ProvinciaService) { }

  ngOnInit(): void {
    this.provincia = this.editingProvincia
    console.log(this.provincia);
  }

  editProvincia(provincia: Provincia): void {
    this.provinciaService.updateProvincia(provincia).subscribe((data:any) => {
      console.log(data);
      this.onEditProvincia.emit(provincia)
      this.closeEdit = false
    })
  }

}
