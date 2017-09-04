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
			Manejo de errores(Error handling)
		*/
      this.http.get<Personas>("assets/data.json",{observe: 'response'})
	  .subscribe(
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

