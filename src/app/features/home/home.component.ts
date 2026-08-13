import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BUSINESS_INFO } from '../../core/data/business-info';
import { MENU_DATA } from '../../core/data/menu-data';
import { HERO_IMAGES } from '../../core/data/hero-images';
import { OpeningStatusComponent } from '../../shared/components/opening-status/opening-status.component';
import { TripadvisorReviewsComponent } from '../../shared/components/tripadvisor-reviews/tripadvisor-reviews.component';
import { MapEmbedComponent } from '../../shared/components/map-embed/map-embed.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    OpeningStatusComponent,
    TripadvisorReviewsComponent,
    MapEmbedComponent,
    IconComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  business = BUSINESS_INFO;
  featuredItems = MENU_DATA.flatMap((category) => category.items.filter((item) => item.featured)).slice(0, 4);

  heroImages = HERO_IMAGES;
  activeImageIndex = 0;
  private carouselInterval?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    if (this.heroImages.length > 1) {
      this.carouselInterval = setInterval(() => {
        this.activeImageIndex = (this.activeImageIndex + 1) % this.heroImages.length;
      }, 5000);
    }
  }

  ngOnDestroy(): void {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }
}