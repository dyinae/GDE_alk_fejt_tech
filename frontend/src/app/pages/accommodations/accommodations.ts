import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationService, Accommodation } 
  from '../../services/accommodation';

@Component({
  selector: 'app-accommodations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accommodations.html',
  styleUrl: './accommodations.css'
})
export class AccommodationsComponent implements OnInit {

  accommodations: Accommodation[] = [];

  constructor(
    private accommodationService: AccommodationService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    console.log('Component betöltődött');

    this.accommodationService.getAll()
      .subscribe(data => {

        console.log('API válasz:', data);

        this.accommodations = data;

        this.cdr.detectChanges();
      });
  }
}
