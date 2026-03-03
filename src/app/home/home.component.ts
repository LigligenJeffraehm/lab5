import { Component } from '@angular/core';
import { HomeInfoComponent } from '../home-info/home-info.component';

@Component({
  selector: 'app-home',
  imports: [HomeInfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
leadersjohto = [
  {name:'Falkner'},
  {name:'Bugsy'},
  {name:'Whitney'},
  {name:'Morty'},
  {name:'Chuck'},
  {name:'Jasmine'},
  {name:'Pryce'},
  {name:'Clair'},
];
leaderskanto =[
  {name:'Brock'},
  {name:'Misty'},
  {name:'Lt. Surge'},
  {name:'Erika'},
  {name:'Koga'},
  {name:'Sabrina'},
  {name:'Blaine'},
  {name:'Giovanni'},
];
}
