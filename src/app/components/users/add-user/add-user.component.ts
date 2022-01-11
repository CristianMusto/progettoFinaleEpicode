import { Router } from '@angular/router';
import { ProvinciaService } from './../../../services/provincia/provincia.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Client, Comuni, IndirizzoS, Provincia } from 'src/app/classes/client/client';
import { ComuniService } from 'src/app/services/comuni/comuni.service';
import { TableService } from 'src/app/services/users/table.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  client: Client = new Client("", "", "", "", "", "", "", "", "", "", new IndirizzoS("", "", "", "", new Comuni("", new Provincia("", ""))), new IndirizzoS("", "", "", "", new Comuni("", new Provincia("", ""))), "", "",0);
  clientType: string[] = [];
  comuni: Comuni[] = [];
  province: Provincia[] = [];

  @Output() onAddClient = new EventEmitter();


  closeAddClient: boolean = true;
  openTable: boolean = false;

  constructor(private clientService: TableService, private comuniService : ComuniService, private provinciaService : ProvinciaService, private router: Router) { }

  ngOnInit(): void {
    this.clientService.getClientType().subscribe((data:any) => {
      console.log(data);
      this.clientType = data;
    })
    this.comuniService.getComuni().subscribe((data:any) => {
      console.log(data.content);
      this.comuni = data.content;
    })
    this.provinciaService.getProvince().subscribe((data:any) => {
      console.log(data.content);
      this.province = data.content;
    })
  }

  addClient(client: Client){
    this.onAddClient.emit(client)
    this.client = new Client("", "", "", "", "", "", "", "", "", "", new IndirizzoS("", "", "", "", new Comuni("", new Provincia("", ""))), new IndirizzoS("", "", "", "", new Comuni("", new Provincia("", ""))), "", "",0);
    this.closeAddClient = false;
    this.openTable = true
  }



}
