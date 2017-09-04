import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'; //http es un observador, donde luego me voy a suscribir para obtener datos
import 'rxjs/Rx'; //para que pueda ussar el map


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
        
      
	       /* 
	       			Hay otros aspectos de un request de salida que puede configurar. Todos estos están disponibles a través de un:
	       			objeto options, que se pasa al request.
	       			post( url, body, options)

	
		   */
	  	const req = this.http.post("https://heroesapp-c4398.firebaseio.com/heroes.json",{
													 "-KsiARzacsBhStpKE4kD":{"bio":"papa","casa":"mama","nombre":"111"}
	  					},
						{  //Una tarea común es "agregar un encabezado de Authorization a los request salientes". Así es como lo haces:
							//La "clase HttpHeaders" es inmutable, por lo que set() retorna una instancia nueva y aplica los cambios.
						    headers: new HttpHeaders().set('Authorization', 'my-auth-token'),


						    /*
						    	Adición de parámetros a la URL. Envia un request con el parámetro id = 3:
								//seria: https://heroesapp-c4398.firebaseio.com/heroes.json?id=3
						    */
						    params: new HttpParams().set('id', '3'),
						}

	  					)
			   .map(res=>{
		  	 		console.log(res);
		  	 		return res;
		});

		// 0 requests made - .subscribe() not called.
		req.subscribe(
		    // Successful responses call the first callback.
		    datos => {
		    	console.log(datos);
		    },
		    // Errors will call this callback instead:
		    err => {
		      console.log('algo tuvo problema!');
		    }
		);
		
		
  }
}