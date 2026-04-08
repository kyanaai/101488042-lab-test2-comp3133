import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../../models/character';
import { Spell } from '../../models/spell';
import { HarryPotterService } from '../../services/harry-potter';
import { CharacterfilterComponent } from '../../components/characterfilter/characterfilter';
import { CharacterListComponent } from '../../components/character-list/character-list';
import { SpellListComponent } from '../../components/spell-list/spell-list';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CharacterfilterComponent,
    CharacterListComponent,
    SpellListComponent,
    MatToolbarModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  private hpService = inject(HarryPotterService);
  private router = inject(Router);

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

      const hasValidImage =
        character.image &&
        character.image.trim() !== '' &&
        character.image.startsWith('http');

      return matchesSearch && matchesHouse && hasValidImage;
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

    if (!value) {
      this.loadCharacters();
      return;
    }

    this.hpService.getCharactersByHouse(value).subscribe({
      next: (data) => this.characters.set(data),
      error: (err) => console.error('Error filtering by house:', err)
    });
  }

  onSpellSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.spellSearch.set(value);
  }

  onViewDetails(id: string): void {
    this.router.navigate(['/character', id]);
  }
}