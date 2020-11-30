import { Produto } from './Produto';

export class Farmacia {
    _id?: string;
    nome: string;
    cnpj: string;
    usuarioId?: string;
    criadoEm?: Date;
    produtos?: Produto[];
}