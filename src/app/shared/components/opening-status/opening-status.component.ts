import { Component, OnInit, OnDestroy } from '@angular/core';
import { BUSINESS_INFO } from '../../../core/data/business-info';
import { OpeningHoursService, OpeningStatus } from '../../../core/services/opening-hours.service';

@Component({
  selector: 'app-opening-status',
  standalone: true,
  imports: [],
  templateUrl: './opening-status.component.html',
  styleUrl: './opening-status.component.scss',
})
export class OpeningStatusComponent implements OnInit, OnDestroy {
  status!: OpeningStatus;
  private intervalId?: ReturnType<typeof setInterval>;

  constructor(private openingHoursService: OpeningHoursService) {}

  ngOnInit(): void {
    this.refresh();
    // Ricalcola ogni minuto così il badge resta corretto se l'utente resta sulla pagina
    this.intervalId = setInterval(() => this.refresh(), 60_000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private refresh(): void {
    this.status = this.openingHoursService.getStatus(BUSINESS_INFO.openingHours);
  }
}
