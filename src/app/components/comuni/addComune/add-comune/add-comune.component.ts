import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Comuni, Provincia } from 'src/app/classes/client/client';
import { ComuniService } from 'src/app/services/comuni/comuni.service';
import { ProvinciaService } from 'src/app/services/provincia/provincia.service';

@Component({
  selector: 'app-add-comune',
  templateUrl: './add-comune.component.html',
  styleUrls: ['./add-comune.component.css']
})
export class AddComuneComponent implements OnInit {

  @Output() onAddComune = new EventEmitter();
  comune: Comuni = new Comuni('',new Provincia('',''));
  province: Provincia[] = [];
  closeAdd: boolean = true;

  constructor(private comuniService: ComuniService, private router: Router, private provinceService : ProvinciaService) { }

  ngOnInit(): void {
    this.provinceService.getProvince().subscribe((data:any) => {
      this.province = data.content;
    })
  }

  creaComune(comune : Comuni){
    this.onAddComune.emit(comune)
    this.closeAdd = false
  }

}
