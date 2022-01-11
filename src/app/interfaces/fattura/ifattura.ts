import { IClient } from "../client/iclient"

export interface IFattura {
    id: number,
    data: string,
    numero: number,
    anno: number,
    importo: string,
    stato: IStatoFattura,
    cliente: IClient,
}

export interface IStatoFattura{
    id: number,
    nome: string
}