import { Component, computed, inject, signal } from '@angular/core';
import { Character } from './models/character';
import { Spell } from './models/spell';
import { HarryPotterService } from './services/harry-potter';
import { SearchFilterComponent } from './components/search-filter/search-filter';
import { CharacterListComponent } from './components/character-list/character-list';
import { SpellListComponent } from './components/spell-list/spell-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchFilterComponent, CharacterListComponent, SpellListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private hpService = inject(HarryPotterService);

  characters = signal<Character[]>([]);
  spells = signal<Spell[]>([]);
  loading = signal(true);
  searchTerm = signal('');
  selectedHouse = signal('');
  spellSearch = signal('');

  filteredCharacters = computed(() => {
    return this.characters().filter((character) => {
      const matchesSearch = character.name
        .toLowerCase()
        .includes(this.searchTerm().toLowerCase());

      const matchesHouse =
        !this.selectedHouse() || character.house === this.selectedHouse();

      const hasImage = character.image && character.image.trim() !== '';

      return matchesSearch && matchesHouse && hasImage;
    });
  });

  filteredSpells = computed(() => {
    return this.spells().filter((spell) =>
      spell.name.toLowerCase().includes(this.spellSearch().toLowerCase())
    );
  });

  constructor() {
    this.loadCharacters();
    this.loadSpells();
  }

  loadCharacters(): void {
    this.hpService.getCharacters().subscribe({
      next: (data) => {
        this.characters.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error fetching characters:', err);
        this.loading.set(false);
      }
    });
  }

  loadSpells(): void {
    this.hpService.getSpells().subscribe({
      next: (data) => {
        this.spells.set(data);
      },
      error: (err) => {
        console.error('Error fetching spells:', err);
      }
    });
  }

  onSearchChanged(value: string): void {
    this.searchTerm.set(value);
  }

  onHouseChanged(value: string): void {
    this.selectedHouse.set(value);
  }

  onSpellSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.spellSearch.set(value);
  }
}