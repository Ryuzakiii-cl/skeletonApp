import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AlertController } from '@ionic/angular';
/* import { MatDatepicker } from '@angular/material/datepicker'; */

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  segment: string = 'mis_datos';
  username: string | null = null;
/*   @ViewChild('picker') picker: MatDatepicker<Date>; */
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
    private alertController: AlertController,

  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.username = params.get('username');
    });
}

  ngOnInit() {
  }

  segmentChanged() {

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
    await alert.present();
}

}//fin clase
