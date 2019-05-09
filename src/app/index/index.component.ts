import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../champions/champion.service';
import { champions } from '../URLs/champions';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  championsList: any;
  championsListTemp: any;
  champion_square_url = champions.champion_square;
  isShowNameFixed = false;
  nameFixed: any = '';
  constructor(
    private championService: ChampionService
  ) {
    this.championService.championsList$.subscribe(
      champions => {
        this.championsList = champions;
        this.championsListTemp = champions;
        console.log(`Count: ${champions.length}`);

      }
    );
  }

  ngOnInit() {
  }

  searchChampions(keyword) {

    this.championsList = this.championsList.filter(
      champ => {
        return champ.id.toLowerCase().trim().includes(keyword.toLowerCase().trim()) && keyword.trim() !== '';
      }
    );
    if (this.championsList.length <= 0) {
      this.championsList = this.championsListTemp;
    }
  }
  showNameFixed(championName) {
    this.nameFixed = this.championsListTemp.find(
      champion => {
        return champion.name = championName;
      }
    );
    this.nameFixed = this.nameFixed.name;
    this.isShowNameFixed = true;
  }
  offNameFixed() {

    this.isShowNameFixed = false;
  }
}
