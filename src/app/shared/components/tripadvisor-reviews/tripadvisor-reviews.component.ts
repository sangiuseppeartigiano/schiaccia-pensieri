import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BUSINESS_INFO } from '../../../core/data/business-info';

@Component({
  selector: 'app-tripadvisor-reviews',
  standalone: true,
  imports: [],
  templateUrl: './tripadvisor-reviews.component.html',
  styleUrl: './tripadvisor-reviews.component.scss',
})
export class TripadvisorReviewsComponent {
  business = BUSINESS_INFO;
  safeIframeUrl?: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    if (this.business.tripadvisor.widgetIframeUrl) {
      this.safeIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.business.tripadvisor.widgetIframeUrl
      );
    }
  }
}