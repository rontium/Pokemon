import { async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { pokemonService } from '../pokemon.service';
import { AlertController } from '@ionic/angular';
import { promise } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valittupokemon : any;

  constructor(public pokemon : pokemonService, private dialogiCtrl: AlertController) {}

  avaa = async () : Promise<any> => {

    const valintaikkuna = await this.dialogiCtrl.create({

                                                    header : "valitse pokemon",
                                                    
                                                    inputs : [{

                                                                name : "pokemon",
                                                                type : "text",
                                                                placeholder : "kirjoita pokemonin nimi..."

                                                              }],
                                                    buttons : [
                                                                {
                                                                  text : "OK",
                                                                  handler : (data : any) => {
                                                                                            this.valittupokemon = data.pokemon
                                                                                            this.pokemon.valinta(this.valittupokemon)
                                                                                            }
                                                                },
                                                                {
                                                                  text : "Peruuta",
                                                                  role : "cancel",
                                                                }
                                                               ]           

                                                   });

      await valintaikkuna.present();                                             

  }
  

}
