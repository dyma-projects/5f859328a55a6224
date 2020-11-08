import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur: number;
  @Output() updateCompteur: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  incremente():void {
    this.compteur = this.compteur + 1;
    this.updateCompteur.emit(this.compteur);
  }

  decremente():void{
    this.compteur = this.compteur - 1;
    this.updateCompteur.emit(this.compteur);
  }
}
