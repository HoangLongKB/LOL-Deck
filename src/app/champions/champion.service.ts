import { Injectable } from '@angular/core';
import { champions } from '../URLs/champions';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getChampions() {
    return this.httpClient.get<any>(champions.champions)
      .pipe(
        map(data => {
          let arrChampionsList = [];
          let keys = Object.keys(data.data);
          keys.forEach(key => {
            arrChampionsList.push(data.data[key]);
          });
          return arrChampionsList;
        })
      );
  }
  getChampionsObj(id) {
    return this.httpClient.get<any>(`${champions.individual_champion}${id}.json`)
      .pipe(
        map(data => {
          return data.data[id];
        })
      );
  }
}
