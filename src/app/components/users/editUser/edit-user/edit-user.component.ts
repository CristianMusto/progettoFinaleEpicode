import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Client, Comuni, IndirizzoS, Provincia } from 'src/app/classes/client/client';
import { ComuniService } from 'src/app/services/comuni/comuni.service';
import { ProvinciaService } from 'src/app/services/provincia/provincia.service';
import { TableService } from 'src/app/services/users/table.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @Output() onEditUser = new EventEmitter();
  @Input() editingClient!: Client;
  client: Client = new Client("", "", "", "", "", "", "", "", "", "", new IndirizzoS("", "", "", "", new Comuni("", new Provincia("", ""))), new IndirizzoS("", "", "", "", new Comuni("", new Provincia("", ""))), "", "",0);
  clientType: string[] = [];
  comuni: Comuni[] = [];
  province: Provincia[] = [];

  constructor(private userService: TableService, private clientService: TableService, private comuniService: ComuniService, private provinciaService : ProvinciaService) { }

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

    this.client = this.editingClient
  }

  editClient(client: Client): void {
    this.userService.updateUser(client).subscribe((data:any) => {
      console.log(data);
      this.onEditUser.emit(client)
    })
  }

}
