import { Component, inject } from '@angular/core';
import { HoennRegionService } from '../hoenn-region.service';

@Component({
  selector: 'app-hoenn-display',
  imports: [],
  templateUrl: './hoenn-display.component.html',
  styleUrl: './hoenn-display.component.css'
})
export class HoennDisplayComponent {
  trainerService=inject(HoennRegionService);
}
