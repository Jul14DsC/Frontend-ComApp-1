import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Menu } from '../models/menu';

@Component({
  selector: 'app-mandar-menu',
  templateUrl: './mandar-menu.component.html',
  styleUrls: ['./mandar-menu.component.css']
})
export class MandarMenuComponent implements OnInit {
  menuArray: Menu[] = [];
  formAgregar: boolean = false;
  formEditar: boolean = false;
  formEliminar: boolean = false;
  formContacto: boolean = false;

  constructor(private menuService: MenuService) {

   }

  ngOnInit(): void {
    this.menuService.getMenu()
    .subscribe(data=>{
      console.log(data)
      this.menuArray = data.data;
    },
    error =>console.log(error));
  }

  selectedMenu: Menu = new Menu();
  seleccionar(menu:Menu){
    this.selectedMenu = menu;

  }

  nuevo(){
    this.selectedMenu = new Menu();
  }

  guardar(){
    if (this.selectedMenu._identificacion == null){
      this.menuService.mandarMenu(this.selectedMenu)
      .subscribe(data=>{

      })
    }
  }

  editar(){
    if (this.selectedMenu._identificacion == null){
      this.menuService.peticionEditar(this.selectedMenu)
      .subscribe(data=>{

      })
    }
  }

  eliminar(lista: []){
    this.menuService.peticionEliminar(lista)
      .subscribe(data=>{
        if(data.transaccion){

        }
      })
  }
}
