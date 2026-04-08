import { Component, Input } from '@angular/core';
import { Character } from '../../models/character';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css'
})
export class CharacterListComponent {
  @Input() characters: Character[] = [];
}