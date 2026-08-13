import { Component, Input } from '@angular/core';

export type IconName = 'phone' | 'email' | 'facebook' | 'instagram' | 'tripadvisor' | 'location';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input({ required: true }) name!: IconName;
  @Input() size = 18;
}