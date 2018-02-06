import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public emptyHeart: string = '/assets/coracao_vazio.png';
  public fullHeart: string = '/assets/coracao_cheio.png';
}
