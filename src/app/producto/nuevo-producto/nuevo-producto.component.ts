import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { Usuario } from 'src/app/models/usuario';
import { ProductoService } from 'src/app/service/producto.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  nombre: string = '';
  cantidad: number = 0;
  fechaIngreso: any;
  usuarioRegistra: any;
  fechaUsuarioRegistra: any;
  usuarioModifica: any;
  fechaUsuarioModifica: any;
  prueba: any;




  constructor(
    private productoService: ProductoService,
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.UsuarioList();
  }

  onCreate(): void {
    const producto = new Producto(this.nombre, this.cantidad,this.fechaIngreso,this.usuarioRegistra,this.fechaUsuarioRegistra, this.usuarioModifica,this.fechaUsuarioModifica);
    this.productoService.save(producto).subscribe(
      data => {
        this.toastr.success('Producto creado', 'Ok', {
          timeOut: 3000,
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
        });
        this.router.navigate(['/']);

      }
    )

  }

  UsuarioList(): void {
    this.usuarioService.list().subscribe(
      data => {
        this.usuarioRegistra = data;
      },
      error => {
        console.error(error)
      }
    )
  }

}
