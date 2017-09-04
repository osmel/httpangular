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
			lectura de respuesta completa (con la opción observe)
			HttpResponse 
			body:{data: Array(100)}
			headers: HttpHeaders {normalizedNames: Map(0), lazyUpdate: null, lazyInit: ƒ}
			ok:true
			status:200
			statusText:"OK"
			type:4
			url:"http://localhost:4200/assets/data.json"
		*/
      this.http.get<Personas>("assets/data.json",{observe: 'response'})
      .subscribe(datos => {
           console.log(datos); 
      });
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

