import { Component } from '@angular/core';
import { BUSINESS_INFO } from '../../core/data/business-info';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  business = BUSINESS_INFO;

  // TODO: sostituire con foto reali del locale/team (percorsi in /public/images)
  galleryPlaceholders = Array.from({ length: 6 });
}
