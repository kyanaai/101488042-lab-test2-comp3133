import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './search-filter.html',
  styleUrl: './search-filter.css'
})
export class SearchFilterComponent {
  @Output() searchChanged = new EventEmitter<string>();
  @Output() houseChanged = new EventEmitter<string>();

  searchControl = new FormControl('');
  selectedHouse = signal('');

  houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

  onSearch(): void {
    this.searchChanged.emit(this.searchControl.value?.trim() || '');
  }

  onHouseChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedHouse.set(value);
    this.houseChanged.emit(value);
  }
}