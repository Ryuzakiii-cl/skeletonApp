import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  username: string = '';
  password: string = '';


  constructor(
    private router: Router,
    private alertController: AlertController
    ) {}


  async iniciarSesion() {
    const users = localStorage.getItem('usuarios');
    let usuariosRegistrados: any[] = [];

    if (users) {
      usuariosRegistrados = JSON.parse(users);

      // Buscar si las credenciales coinciden con algún usuario registrado
      const usuarioEncontrado = usuariosRegistrados.find(
        (usuario) =>
          usuario.username === this.username && usuario.password === this.password
      );

      if (usuarioEncontrado) {
        this.router.navigate(['/login']);
      } else {
        this.mostrarAlerta('Usuario y/o Contraseña incorrecta');
      }
    } else {
      // No hay usuarios registrados, mostrar un mensaje de alerta
      this.mostrarAlerta('No hay usuarios registrados');
    }
  }

  crearRegistro(){
    this.router.navigate(['/registro'])
  }


  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: mensaje,
      buttons: ['CERRAR']
    });
  
    await alert.present();
  }

}
