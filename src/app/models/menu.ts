export class Menu {
  _identificacion!: string;
  id_platillo!: number;
  platillo!: string;
  descripcion!: string;
  precio_unitario!: number;
  tipo!: number;
  contador!: number;
}

export class Send {
  menu : Menu[];
  id_mesa : number;
}
