import { IClient } from "src/app/interfaces/client/iclient"

export class Fattura {
    id!: number;
    data!: string;
    numero!: number;
    anno!: number;
    importo!: number;
    stato!: StatoFattura;
    cliente!: IClient;
}

export class StatoFattura {
    id!: number;
    nome!: string
}
