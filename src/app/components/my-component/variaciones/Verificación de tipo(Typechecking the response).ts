import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //http es un observador, donde luego me voy a suscribir para obtener datos


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
     // Realizar la peticion(request) HTTP:
      this.http.get<Personas>("assets/data.json")
      .subscribe(datos => {
	   // Leer el campo de resultado de la respuesta JSON.
           //this.results = data['results']; //results es el root
           //console.log(datos['data']);

           /*
           //Si intento escribir datos.data, TypeScript se quejaría de que el Object de regreso de HTTP no tiene una propiedad "data". 
           //Eso es porque mientras HttpClient analizó(parseo) la respuesta JSON en un Object, no sabe qué forma tiene ese objeto.
           //para evitar esto tenemos que, decir HttpClient qué tipo de respuesta será, lo que se recomienda. Para ello es:
            //1- Definir una interfaz con la forma correcta:

					interface ItemsResponse {
					  data: string[];
					}

			  2- Realizar la llamada HttpClient.get con el parámetro de tipo interfaz:
					http.get<ItemsResponse> 
            */

           console.log(datos.data[0].name); 
      });
  }

}

////////////////////////////////////
interface ItemsResponse {
  data: string[];
}


///////////////////////////////////
export interface Personas {
    data : {
	    name: string;
	    email: string;
	    regDate: string;
	    city: string;
	     age: number;
    }
}




///////////////////// //https://beshanoe.github.io/json2ts/
export interface IRootObject {
  data: IData[];
}

export interface IData {
  name: string;
  email: string;
  regDate: string;
  city: string;
  age: number;
}