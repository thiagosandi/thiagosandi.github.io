import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: number;
  empate: number;
  pontos: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Tottenham', weight: 0, symbol: 0, empate: 0, pontos: 0 },
  { position: 2, name: 'Liverpool', weight: 0, symbol: 0, empate: 0, pontos: 0 },
  { position: 3, name: 'Sheffield', weight: 0, symbol: 0, empate: 0, pontos: 0 },
  { position: 4, name: 'Manchster United', weight: 0, symbol:  0, empate: 0, pontos: 0 },
  { position: 5, name: 'Aston Villa', weight: 0, symbol:  0, empate: 0, pontos: 0 },
  { position: 6, name: 'Wolverhampton', weight: 0, symbol:  0, empate: 0, pontos: 0 },
  { position: 7, name: 'Burnley', weight: 0, symbol:  0, empate: 0, pontos: 0 },
  { position: 8, name: 'Newcastle', weight: 0, symbol:  0, empate: 0, pontos: 0 },
  { position: 9, name: 'Leicester', weight: 0, symbol: 0, empate: 0, pontos: 0 },
  { position: 10, name: 'Brighton', weight: 0, symbol:  0, empate: 0, pontos: 0 },
  { position: 11, name: 'Everton', weight: 0, symbol: 0, empate: 0, pontos: 0 },
  { position: 12, name: 'Chelsea', weight: 0, symbol: 0, empate: 0, pontos: 0 },
  { position: 13, name: 'West Ham', weight: 0, symbol: 0, empate: 0, pontos: 0 },
  { position: 14, name: 'Manchester City', weight: 0, symbol: 0, empate: 0, pontos: 0 },
  { position: 15, name: 'Crystal Palace', weight: 0, symbol: 0, empate: 0, pontos: 0 },
  { position: 16, name: 'Watford', weight: 0, symbol: 0, empate: 0, pontos: 0 },
  { position: 17, name: 'Arsenal', weight: 0, symbol: 0, empate: 0, pontos: 0 },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'empate', 'pontos'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
