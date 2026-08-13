import { Component } from '@angular/core';
import { BUSINESS_INFO } from '../../core/data/business-info';
import { MapEmbedComponent } from '../../shared/components/map-embed/map-embed.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MapEmbedComponent, IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  business = BUSINESS_INFO;
}
