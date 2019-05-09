import { Injectable } from '@angular/core';
import { champions } from '../URLs/champions';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  championsList: BehaviorSubject<any>;
  championsList$: Observable<any>;


  constructor(
    private httpClient: HttpClient
  ) {
    this.championsList = new BehaviorSubject<any>({});
    this.championsList$ = this.championsList.asObservable();
  }

  getChampions() {
    this.httpClient.get<any>(champions.champions)
      .pipe(
        map(data => {
          let arrChampionsList = [];
          let keys = Object.keys(data.data);
          keys.forEach(key => {
            arrChampionsList.push(data.data[key]);
          });
          return arrChampionsList;
        }),
      ).subscribe(champList => {
          this.championsList.next(champList);
        }
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
