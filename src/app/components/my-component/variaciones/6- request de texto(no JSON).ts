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
        /*
			Solicitar datos no JSON(Requesting non-JSON data)
			No todas las API retornan datos JSON. Suponga que desea leer un archivo de texto en el servidor.
			 Tienes que decirle a HttpClient que esperas una respuesta textual:
		*/
      this.http.get("assets/data.json",{responseType: 'text'})
	       /* El Observable retornado por get () es del tipo Observable<string>
		    porque se especificó una respuesta de texto. No hay necesidad de pasar
		    un parámetro de tipo <string> para get(). Es decir no hay necesidad de hacer esto .get<string>
		   */
	  
	    .subscribe(
		    datos => {
		    	console.log(datos);
		    }
		);
  }

}



