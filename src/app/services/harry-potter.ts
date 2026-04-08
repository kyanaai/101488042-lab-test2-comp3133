import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';
import { Spell } from '../models/spell';

@Injectable({
  providedIn: 'root'
})
export class HarryPotterService {
  private http = inject(HttpClient);

  private charactersUrl = 'https://hp-api.onrender.com/api/characters';
  private spellsUrl = 'https://hp-api.onrender.com/api/spells';

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.charactersUrl);
  }

  getCharactersByHouse(house: string): Observable<Character[]> {
    return this.http.get<Character[]>(
      `https://hp-api.onrender.com/api/characters/house/${house}`
    );
  }

  getCharacterById(id: string): Observable<Character[]> {
    return this.http.get<Character[]>(
      `https://hp-api.onrender.com/api/character/${id}`
    );
  }

  getSpells(): Observable<Spell[]> {
    return this.http.get<Spell[]>(this.spellsUrl);
  }
}