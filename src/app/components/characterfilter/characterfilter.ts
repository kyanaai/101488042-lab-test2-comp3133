import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './characterfilter.html',
  styleUrl: './characterfilter.css'
})
export class CharacterfilterComponent {
  @Output() searchChanged = new EventEmitter<string>();
  @Output() houseChanged = new EventEmitter<string>();

  searchControl = new FormControl('');

  houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

  onSearch(): void {
    this.searchChanged.emit(this.searchControl.value?.trim() || '');
  }

  onHouseChange(value: string): void {
    this.houseChanged.emit(value);
  }
}