import { Component, input } from '@angular/core';

@Component({
  selector: 'app-home-info',
  imports: [],
  templateUrl: './home-info.component.html',
  styleUrl: './home-info.component.css'
})
export class HomeInfoComponent {
 name = input.required<string>();//required
}
