import { Component, OnInit } from '@angular/core';

import { Phrase } from '../shared/phrase.model';
import { PHRASE } from './phrase-mock';

 @Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

   public phrase: Phrase[] = PHRASE;
   public instruction: string = 'Traduza a frase';
   public response: string;

   public round: number = 0;
   public roundPhrase: Phrase;

  constructor() {
    this.roundPhrase = this.phrase[this.round];
  }

  ngOnInit() {
  }

  public updateResponse(response: Event): void {
    this.response = ((<HTMLInputElement>response.target).value);
    // console.log(this.response);
  }

  public checkAnswer(): void {
    if(this.roundPhrase.phrasePTBR === this.response){
      alert('Tradução correta');
      this.round ++;
      this.roundPhrase = this.phrase[this.round];
    } else {
      alert('Tradução incorreta')
    }
  }
}
