export interface IClient {
    id: number,
    ragioneSociale: string,
    partitaIva: string,
    tipoCliente: string,
    email: string,
    pec: string,
    telefono: string,
    nomeContatto: string,
    cognomeContatto: string,
    telefonoContatto: string,
    emailContatto: string,
    indirizzoSedeOperativa: IIndirizzoS,
    indirizzoSedeLegale: IIndirizzoS,
    dataInserimento: string,
    dataUltimoContatto: string,
    fatturatoAnnuale: number,
}

export interface IIndirizzoS {
    id: number,
    via: string,
    civico: string,
    cap: string,
    localita: string,
    comune: IComuni
} 

export interface IComuni {
    id: number,
    nome: string,
    provincia: IProvincia
}

export interface IProvincia {
    id: number,
    nome: string,
    sigla: string
}
