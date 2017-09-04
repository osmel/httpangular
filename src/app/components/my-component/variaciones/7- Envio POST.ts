import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //http es un observador, donde luego me voy a suscribir para obtener datos
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
	       Enviar datos POST a un servidor
	    
	 		//retornar un "observable", pero todavia debemos suscribirnos a este observable
		  	 // de lo contrario, no veremos las respuesta, para ver las respuesta de un observable hay que estar inscrito
		  	 //post( urldefirebase.json, campos, {'Content-Type':'application/json'})


		   */
	  	const req = this.http.post("https://heroesapp-c4398.firebaseio.com/heroes.json",{
													 "-KsiARzacsBhStpKE4kD":{"bio":"uno","casa":"uno","nombre":"111"}
	  					})
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