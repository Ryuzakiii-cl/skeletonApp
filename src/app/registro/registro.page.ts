import { Component, OnInit } from '@angular/core';
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";


@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
})
export class RegistroPage implements OnInit{
  username: string = '';
  password: string = '';


  constructor(
    private router: Router,
    private alertController: AlertController
    ) {};
  

  limpiarCampos() {
    this.username = '';
    this.password = '';
  }

  async registrarUsuario() {
    if (/^[a-zA-Z0-9]{3,8}$/.test(this.username) && /^\d{4}$/.test(this.password)) {
      const usuario = {
        username: this.username,
        password: this.password,
      };
      const users = localStorage.getItem('usuarios');
      let usersRegistrados: any[] = [];

      if (users) {
        usersRegistrados = JSON.parse(users);
      }

      usersRegistrados.push(usuario);

      localStorage.setItem('usuarios', JSON.stringify(usersRegistrados));
      this.mostrarAlerta('El usuario se ha creado exitosamente');
      this.limpiarCampos();
    } else {
      this.mostrarAlerta('Ingrese solamente valores definidos');
    }
  }

  toTab1(){
    this.router.navigateByUrl('/tabs/tab1');
  }


  ngOnInit(){
    this.mostrarUsuariosRegistrados();
  }


  mostrarUsuariosRegistrados() {
    const users = localStorage.getItem('usuarios');
    let usersRegistrados: any[] = [];

    if (users) {
      usersRegistrados = JSON.parse(users);
    }

    console.log('Usuarios Registrados:', usersRegistrados);
  }

//alerta

async mostrarAlerta(mensaje: string) {
  const alert = await this.alertController.create({
    header: 'Mensaje',
    message: mensaje,
    buttons: ['CERRAR']
  });

  await alert.present();
}

}//fin class

