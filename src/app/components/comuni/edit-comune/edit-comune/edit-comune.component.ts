import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Comuni, Provincia } from 'src/app/classes/client/client';
import { ComuniService } from 'src/app/services/comuni/comuni.service';
import { ProvinciaService } from 'src/app/services/provincia/provincia.service';

@Component({
  selector: 'app-edit-comune',
  templateUrl: './edit-comune.component.html',
  styleUrls: ['./edit-comune.component.css']
})
export class EditComuneComponent implements OnInit {

  @Output() onEditComune = new EventEmitter();
  @Input() editingComune!: Comuni
  comune: Comuni = new Comuni('', new Provincia('', ''));
  province: Provincia[] = [];

  constructor(private comuniService: ComuniService, private provinceService: ProvinciaService) { }

  ngOnInit(): void {
    this.comune = this.editingComune
    this.provinceService.getProvince().subscribe((data:any) => {
      this.province = data.content;
    })
  }

  editComune(comune: Comuni): void {
    this.comuniService.updateComune(comune).subscribe((data:any) => {
      console.log(data);
      this.onEditComune.emit(comune)
    })
  }

}
