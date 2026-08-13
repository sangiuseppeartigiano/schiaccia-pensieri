import { Component } from '@angular/core';
import { BUSINESS_INFO } from '../../../core/data/business-info';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  business = BUSINESS_INFO;
  currentYear = new Date().getFullYear();
}
