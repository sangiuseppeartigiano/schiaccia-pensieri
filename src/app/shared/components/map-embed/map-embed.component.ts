import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BUSINESS_INFO } from '../../../core/data/business-info';

@Component({
  selector: 'app-map-embed',
  standalone: true,
  imports: [],
  templateUrl: './map-embed.component.html',
  styleUrl: './map-embed.component.scss',
})
export class MapEmbedComponent {
  business = BUSINESS_INFO;
  safeMapUrl: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.safeMapUrl = sanitizer.bypassSecurityTrustResourceUrl(this.business.address.mapsEmbedUrl);
  }
}
