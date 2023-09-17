import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string | null = null;
  formData ={
    nombre: '',
    apellido: '',
    nivel_educacional: '',
    fecha: '',
  };

  animacionActiva = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.username = params.get('username');
    });
}

  ngOnInit() {
  }

  mostrarDatos(){
    const nombre = this.formData.nombre
    const apellido = this.formData.apellido
    const nivel_educacional = this.formData.nivel_educacional
    const fecha = this.formData.fecha
    const mensaje = `
    ${nombre},
    ${apellido},
    ${nivel_educacional},
    ${fecha}`;
    this.presentAlert('Usuario', mensaje)
  }


  limpiarCampos(){
    this.animacionActiva = true;
    this.formData = {
      nombre: '',
      apellido: '',
      nivel_educacional: '',
      fecha: '',
    };
    setTimeout(() => {        
      // Desactivar la animación después de limpiar
      this.animacionActiva = false;
    }, 1000);
  }
  

  logout() {
    this.router.navigateByUrl('/tabs/tab1');
  }



  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['CERRAR'],
    });

}

}//fin clase
