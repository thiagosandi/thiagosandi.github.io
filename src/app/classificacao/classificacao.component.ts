import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  jogos: number;
  weight: number;
  symbol: number;
  empate: number;
  pontos: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Liverpool', jogos: 11, weight: 7, symbol: 3, empate: 1, pontos: 72 },
  { position: 2, name: 'Brighton', weight: 4, jogos: 8, symbol: 3, empate: 1, pontos: 52 },
  { position: 3, name: 'West Ham', weight: 5, jogos: 9, symbol: 2, empate: 2, pontos: 52 },
  { position: 4, name: 'Manchester City', weight: 2, jogos: 7, symbol: 3, empate: 2, pontos: 43 },
  { position: 5, name: 'Everton', weight: 5, symbol: 2, jogos: 7, empate: 0, pontos: 40 },
  { position: 6, name: 'Chelsea', weight: 3, symbol: 2, jogos: 6, empate: 1, pontos: 34 },
  { position: 7, name: 'Crystal Palace', weight: 5, jogos: 8, symbol: 2, empate: 1, pontos: 33 },
  { position: 8, name: 'Manchster United', weight: 3, jogos: 7, symbol: 3, empate: 1, pontos: 31 },
  { position: 9, name: 'Wolverhampton', weight: 2, jogos: 7, symbol: 3, empate: 2, pontos: 31 },
  { position: 10, name: 'Newcastle', weight: 3, jogos: 6, symbol: 3, empate: 0, pontos: 31 },
  { position: 11, name: 'Burnley', weight: 1, jogos: 5, symbol: 3, empate: 1, pontos: 25 },
  { position: 12, name: 'Leicester', weight: 2, jogos: 6, symbol: 3, empate: 1, pontos: 25 },
  { position: 13, name: 'Sheffield', weight: 0, jogos: 5, symbol: 5, empate: 0, pontos: 22 },
  { position: 14, name: 'Aston Villa', weight: 1, jogos: 5, symbol: 3, empate: 1, pontos: 22 },
  { position: 15, name: 'Arsenal', weight: 1, jogos: 5, symbol: 4, empate: 0, pontos: 22 },
  { position: 16, name: 'Tottenham', weight: 0, jogos: 0, symbol: 0, empate: 0, pontos: 0 },
  { position: 17, name: 'Watford', weight: 0, jogos: 0, symbol: 0, empate: 0, pontos: 0 },
];

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.component.html',
  styleUrls: ['./classificacao.component.css']
})
export class ClassificacaoComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'pontos', 'jogos', 'weight', 'empate', 'symbol',];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
