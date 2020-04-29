import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class pokemonService {

url = "https://pokeapi.co/api/v2/pokemon/ditto/"

nimi : any;
pituus : any;
paino: any;
kuva : any;
kuvakoodi : any;
id : any;

  constructor(private http : HttpClient) { 

    this.http.get(this.url).subscribe((data : any) => {

      this.nimi = data.name
      this.pituus = data.height
      this.paino = data.weight
      this.id = data.id

      this.kuvakoodi = data.sprites.front_default
      console.log(data.sprites.front_default)
      this.kuva = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.id + ".png";
       
    }); 

}

valinta = (valittupokemon) : any => {

  this.http.get("https://pokeapi.co/api/v2/pokemon/" + valittupokemon).subscribe((data : any) => {

      if (data.name){

        this.nimi = data.name
        this.pituus = data.height
        
        this.paino = data.weight

        this.id = data.id

        this.kuvakoodi = data.sprites.front_default
        
        this.kuva = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.id + ".png";

      }
     
  }); 
 
}

}