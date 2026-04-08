import { Component, Input } from '@angular/core';
import { Spell } from '../../models/spell';

@Component({
  selector: 'app-spell-list',
  standalone: true,
  imports: [],
  templateUrl: './spell-list.html',
  styleUrl: './spell-list.css'
})
export class SpellListComponent {
  @Input() spells: Spell[] = [];
}