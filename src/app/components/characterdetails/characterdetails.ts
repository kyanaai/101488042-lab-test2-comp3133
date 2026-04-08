import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HarryPotterService } from '../../services/harry-potter';
import { Character } from '../../models/character';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './characterdetails.html',
  styleUrl: './characterdetails.css'
})
export class CharacterDetailsComponent {
  private route = inject(ActivatedRoute);
  private hpService = inject(HarryPotterService);

  character = signal<Character | null>(null);
  loading = signal(true);

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.hpService.getCharacterById(id).subscribe({
        next: (data) => {
          this.character.set(data[0] || null);
          this.loading.set(false);
        },
        error: (err) => {
          console.error('Error fetching character details:', err);
          this.loading.set(false);
        }
      });
    } else {
      this.loading.set(false);
    }
  }

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = 'assets/default-avatar.png';
  }
}