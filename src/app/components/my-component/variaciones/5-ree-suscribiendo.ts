import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'; //http es un observador, donde luego me voy a suscribir para obtener datos
import 'rxjs/add/operator/retry';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
        /*
			Una forma de tratar los errores es simplemente reintentar la solicitud.
			RxJS tiene un operador útil llamado .retry(), que automáticamente "resubscribes a un Observable",
			 reeditando así la solicitud, al encontrarse con un error.

		*/
      this.http.get<Personas>("assets/data1.json",{observe: 'response'})
	  .retry(3)
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
		  
		)

	  ;
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

