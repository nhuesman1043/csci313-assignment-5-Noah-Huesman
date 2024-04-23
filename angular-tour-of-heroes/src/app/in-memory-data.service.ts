import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', rating: 1 },
      { id: 13, name: 'Bombasto', rating: 4 },
      { id: 14, name: 'Celeritas', rating: 1 },
      { id: 15, name: 'Magneta', rating: 2 },
      { id: 16, name: 'RubberMan', rating: 5 },
      { id: 17, name: 'Dynama', rating: 1 },
      { id: 18, name: 'Dr. IQ', rating: 2 },
      { id: 19, name: 'Magma', rating: 4 },
      { id: 20, name: 'Tornado', rating: 3 }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}