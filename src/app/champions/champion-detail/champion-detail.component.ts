import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionService } from '../champion.service';
import { champions } from 'src/app/URLs/champions';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.scss']
})
export class ChampionDetailComponent implements OnInit {
  champion: any;
  champion_splash_url = '';
  champion_spell_url = champions.champion_spell;
  champion_passive_url = champions.champion_passive_url;
  skin_number = 0;
  skins = 0;
  skin_name = 'default';
  currentSkill = 0;
  currentSkillInfo = '';

  constructor(
    private activeRoute: ActivatedRoute,
    private championService: ChampionService
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => {
        if(params['id']) {
          this.championService.getChampionsObj(params['id']).subscribe(
            champion => {
              this.champion = champion;
              this.champion_splash_url = `${champions.champion_splash}${this.champion.id}_${champion.skins[this.skin_number].num}.jpg`;
              this.skins = champion.skins.length;
              this.skin_name = champion.skins[this.skin_number].name;
              this.currentSkillInfo = champion.spells[this.currentSkill].description;
            }
          );
        }
      }
    );
  }

  changeSkin(feature) {
    if (feature == 1) {
      if (this.skin_number <= 0) {
        this.skin_number = (this.skins - 1);
      } else {
        this.skin_number = this.skin_number - 1;
      }
      this.champion_splash_url = `${champions.champion_splash}${this.champion.id}_${this.champion.skins[this.skin_number].num}.jpg`;
      this.skin_name = this.champion.skins[this.skin_number].name;

    } else if (feature == 2){
      if (this.skin_number >= (this.skins - 1)) {
        this.skin_number = 0;
      } else {
        this.skin_number = this.skin_number + 1;
      }
      this.champion_splash_url = `${champions.champion_splash}${this.champion.id}_${this.champion.skins[this.skin_number].num}.jpg`;
      this.skin_name = this.champion.skins[this.skin_number].name;
    }
  }

  changeSkillInfo(spellID) {
    this.currentSkill = this.champion.spells.findIndex(x => x.id == spellID);
    this.currentSkillInfo = this.champion.spells[this.currentSkill].description;
  }
  changePassive() {
    this.currentSkillInfo = this.champion.passive.description;
  }

}
