import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../models/character';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css'
})
export class CharacterListComponent {
  @Input() characters: Character[] = [];
  @Output() viewDetails = new EventEmitter<string>();

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = 'assets/default-avatar.png';
  }

  openDetails(id: string): void {
    this.viewDetails.emit(id);
  }
}