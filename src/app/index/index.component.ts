import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../champions/champion.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  championsList: any;
  constructor(
    private championService: ChampionService
  ) {
    this.championService.getChampions().subscribe(
      champions => {
        this.championsList = champions;
      }
    );
   }

  ngOnInit() {
  }

}
