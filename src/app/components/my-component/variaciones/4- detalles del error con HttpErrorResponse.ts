import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'; //http es un observador, donde luego me voy a suscribir para obtener datos


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
        /*
			Detectar que se ha producido un error es una cosa, pero es más útil saber qué error realmente ocurrió.
			 El parámetro err del callback  es de tipo "HttpErrorResponse" y contiene información útil sobre lo que salió mal.

			Hay dos tipos de errores que pueden ocurrir:
			 - Si el backend devuelve un código de respuesta sin éxito (404, 500, etc.), se retorna como un error. 
			 - si algo sale mal del lado del cliente, como una excepción se lanza en un operador RxJS, o si un error de red impide que la solicitud 
			 se complete correctamente, se lanzará un Error real .
               //En ambos casos, usted puede mirar el HttpErrorResponsepara averiguar qué sucedió.
		*/
      this.http.get<Personas>("assets/data1.json",{observe: 'response'})
	  .subscribe(
		    // Successful responses call the first callback.
		    datos => {
		    	console.log(datos);
		    },
		    // Errors will call this callback instead:
		  	(err: HttpErrorResponse) => {
			      if (err.error instanceof Error) {
			        // A client-side or network error occurred. Handle it accordingly.
			        console.log('An error occurred:', err.error.message);
			      } else {
			        // The backend returned an unsuccessful response code.
			        // The response body may contain clues as to what went wrong,
			        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
			      }
		   	}
		  
		);
  }

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

