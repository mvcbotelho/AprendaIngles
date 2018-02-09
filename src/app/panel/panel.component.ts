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
  constructor() { console.log(this.phrase) }

  ngOnInit() {
  }

  public updateResponse(response: Event): void {
    this.response = ((<HTMLInputElement>response.target).value);
    // console.log(this.response);
  }

  public checkAnswer(): void {
    console.log('Verifica resposta:', this.response);
  }
}
