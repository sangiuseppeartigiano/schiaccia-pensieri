import { Injectable } from '@angular/core';
import { DayHours } from '../models/business-info.model';

export interface OpeningStatus {
  isOpen: boolean;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class OpeningHoursService {
  /**
   * Calcola se l'attività è aperta ora, in base all'orario locale del browser
   * e alla lista di DayHours passata (vedi business-info.ts).
   */
  getStatus(hours: DayHours[], now: Date = new Date()): OpeningStatus {
    const day = hours.find((d) => d.dayOfWeek === now.getDay());

    if (!day || day.closed || day.periods.length === 0) {
      return { isOpen: false, message: 'Chiuso oggi' };
    }

    const nowMinutes = now.getHours() * 60 + now.getMinutes();

    for (const period of day.periods) {
      const [openH, openM] = period.open.split(':').map(Number);
      const [closeH, closeM] = period.close.split(':').map(Number);
      const openMinutes = openH * 60 + openM;
      const closeMinutes = closeH * 60 + closeM;

      if (nowMinutes >= openMinutes && nowMinutes < closeMinutes) {
        return { isOpen: true, message: `Aperto ora · chiude alle ${period.close}` };
      }

      if (nowMinutes < openMinutes) {
        return { isOpen: false, message: `Chiuso ora · apre alle ${period.open}` };
      }
    }

    return { isOpen: false, message: 'Chiuso ora' };
  }
}
