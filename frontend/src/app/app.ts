import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationService } from './services/accommodation';
import { Observable } from 'rxjs';
import { Accommodation } from './services/accommodation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html'
})
export class AppComponent {

  accommodations$: Observable<Accommodation[]>;

  constructor(private service: AccommodationService) {
    this.accommodations$ = this.service.getAll();
  }
}
