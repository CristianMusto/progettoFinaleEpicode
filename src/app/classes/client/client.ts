import { IClient, IComuni, IIndirizzoS, IProvincia } from "src/app/interfaces/client/iclient";

export class Client implements IClient{
    id!: number;
    ragioneSociale!: string;
    partitaIva!: string;
    tipoCliente!: string;
    email!: string;
    pec!: string;
    telefono!: string;
    nomeContatto!: string;
    cognomeContatto!: string;
    telefonoContatto!: string;
    emailContatto!: string;
    indirizzoSedeOperativa!: IndirizzoS;
    indirizzoSedeLegale!: IndirizzoS;
    dataInserimento!: string;
    dataUltimoContatto!: string;
    fatturatoAnnuale!: number;

    constructor(ragioneSociale: string, partitaIva: string, tipoCliente: string, email: string, pec: string, telefono: string, nomeContatto: string, cognomeContatto: string, telefonoContatto: string, emailContatto: string, indirizzoSedeOperativa: IndirizzoS, indirizzoSedeLegale: IndirizzoS, dataInserimento: string, dataUltimoContatto: string, fatturatoAnnuale: number){
        this.ragioneSociale = ragioneSociale;
        this.partitaIva = partitaIva;
        this.tipoCliente = tipoCliente;
        this.email = email;
        this.pec = pec;
        this.telefono = telefono;
        this.nomeContatto = nomeContatto;
        this.cognomeContatto = cognomeContatto;
        this.telefonoContatto = telefonoContatto;
        this.emailContatto = emailContatto;
        this.indirizzoSedeLegale = indirizzoSedeLegale;
        this.indirizzoSedeOperativa = indirizzoSedeOperativa;
        this.dataInserimento = dataInserimento;
        this.dataUltimoContatto = dataUltimoContatto;
        this.fatturatoAnnuale = fatturatoAnnuale;
    }
}

export class IndirizzoS implements IIndirizzoS{
    id!: number;
    via!: string;
    civico!: string;
    cap!: string;
    localita!: string;
    comune!: Comuni;

    constructor(via: string, civico: string, cap: string, localita: string, comune: Comuni){
        this.via = via;
        this.civico = civico;
        this.cap = cap;
        this.localita = localita;
        this.comune = comune;
    }
} 

export class Comuni implements IComuni {
    id!: number;
    nome!: string;
    provincia!: Provincia;

    constructor(nome: string,provincia: Provincia){
        this.nome = nome;
        this.provincia = provincia;
    }
}

export class Provincia implements IProvincia {
    id!: number;
    nome!: string;
    sigla!: string;

    constructor(nome: string,sigla: string){
        this.nome = nome;
        this.sigla = sigla;
    }
}