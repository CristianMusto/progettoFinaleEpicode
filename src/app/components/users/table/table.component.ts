import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client, Comuni, Provincia } from 'src/app/classes/client/client';
import { ComuniService } from 'src/app/services/comuni/comuni.service';
import { ProvinciaService } from 'src/app/services/provincia/provincia.service';
import { TableService } from 'src/app/services/users/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  clients: Client[] = [];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];

  openAddUser: boolean = false;
  openTable: boolean = true;

  selectedClient!:Client; 
  openEdit:boolean = false;

  comuneId : Comuni = new Comuni('', new Provincia('',''));

  constructor(private route: ActivatedRoute, private clientService: TableService, private router: Router, private comuniService: ComuniService, private provinciaService : ProvinciaService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      
      this.clientService.getPagedUsers(params["page"]).subscribe((clients:any) => {
       
        this.clients = clients.content

        this.totalElements = clients.totalElements
        this.size = clients.size
        this.numberOfPages = Math.round(clients.totalElements / clients.size)


        for(let i = 0; i <= this.numberOfPages; i++){
          console.log(i);
          this.pageNumbers.push(i);
        }
      });

    })
    
  }

  comuniById(comune: Comuni){
    this.comuniService.getComuneById(comune.id).subscribe((data:any) => {
      console.log(data.content);
      this.comuneId = data.content;
    })
  }

  onAddClient(client : Client){
    this.clientService.addClient(client).subscribe((client:any) => {
      client.indirizzoSedeOperativa.comune = this.comuneId
      client.indirizzoSedeLegale.comune = this.comuneId
      this.clients.push(client)
      console.log(client);
    })
  }

  selectUser(client: Client){
    this.selectedClient = client;
    this.openEdit = true;
    this.openTable = false;
  }

  closeEdit(){
    this.openEdit = false;
    this.openTable = true
  }

  openAdd(e:any){
    e.preventDefault();
    if (this.openAddUser === false) {
      this.openTable = false
      this.openAddUser = true;
    }else {
      this.openTable = true
      this.openAddUser = false;
    }
  }

  removeClient(client:Client) {
    console.log(client);
    this.clientService.deleteClient(client.id).subscribe(data => {
      this.clients.splice(this.clients.indexOf(client), 1);
      console.log(data);
    })
  }

  fattura(client:Client) {
    this.router.navigate(['fattura/cliente/'+client.id+'/page/0'])
  }

  comuni(){
    this.router.navigate(['comuni'])
  }



}
