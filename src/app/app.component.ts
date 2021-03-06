import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fruta: string = 'manzana';
  verdura: string = 'lechuga';

  pi: number = 3.14159265359;
  ciudad = {
    nombre: 'Bahía Blanca',
    poblacion: 284776,
    provincia: 'Buenos aires',
  };
  helloWorld = () => {
    return 'Hola mundo!';
  };

  variable1:boolean = true;
  variable2:boolean = false;
  canasto: any = ['Manzanas', 'Peras', 'Platanos', 'Frutillas'];
  estado: number = 1;
}
