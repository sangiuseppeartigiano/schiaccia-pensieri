import { Component } from '@angular/core';
import { MENU_DATA } from '../../core/data/menu-data';
import { BUSINESS_INFO } from '../../core/data/business-info';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  categories = MENU_DATA;
  business = BUSINESS_INFO;
}
