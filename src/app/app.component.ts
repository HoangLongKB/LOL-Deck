import { Component, OnInit } from '@angular/core';
import { ChampionService } from './champions/champion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private championService: ChampionService){
  }
  ngOnInit(): void {
    this.championService.getChampions();
  }
  title = 'LOL-Deck';
}
