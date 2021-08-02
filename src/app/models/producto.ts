import { Usuario } from "./usuario";

export class Producto {
  idProducto?: number;
  nombre: string;
  cantidad: number;
  fechaIngreso: Date;
  usuarioRegistra: Usuario;
  fechaUsuarioRegistra: Date;
  usuarioModifica?: Usuario;
  fechaUsuarioModifica?: Date;

  constructor(nombre: string, cantidad: number, fechaIngreso: Date, usuarioRegistra: Usuario, fechaUsuarioRegistra: Date, usuarioModifica: Usuario, fechaUsuarioModifica: Date){
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.fechaIngreso = fechaIngreso;
    this.usuarioRegistra = usuarioRegistra;
    this.fechaUsuarioRegistra = fechaUsuarioRegistra;
    this.usuarioModifica = usuarioModifica;
    this.fechaUsuarioModifica = fechaUsuarioModifica;
  }




}
