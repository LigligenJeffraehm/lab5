import { Component, signal } from '@angular/core';
import { LeaderInfoComponent } from '../leader-info/leader-info.component';

@Component({
  selector: 'app-johto-region',
  standalone:true,
  imports: [LeaderInfoComponent],
  templateUrl: './johto-region.component.html',
  styleUrl: './johto-region.component.css',
})
export class JohtoRegionComponent {
leaders = [
  {name:'Falkner',badge:'Zephyr', age:17 ,location: 'Violet City', description: 'The Elegant Master of Flying Pokémon', team:'Geodude, Crobat,Golem', dialogue:'Im Falkner, the Violet Pokémon Gym leader! People say you can clip flying type Pokémons wings with a jolt of electricity... I wont allow such insults to bird Pokémon! Ill show you the real power of the magnificent bird Pokémon!'},
  {name:'Bugsy',badge:'Hive', age:11 ,location: 'Azalea Town', description: 'The Walking Bug Pokémon Encyclopedia', team:'Metapod,Kakuna,Scyther', dialogue:'I am the bug Pokémon researcher, Bugsy! Ready to get started?'},
  {name:'Whitney',badge:'Plain', age:16 ,location: 'Goldenrod City', description: 'The Incredibly Pretty Girl', team:'Miltank,Clefairy', dialogue:'If you need a Pokémon for your packaging, look no further than Miltank!'},
  {name:'Morty',badge:'Fog', age:22 ,location: 'Ecruteak City', description: 'The Mystic Seer of the Future', team:'Haunter, Gengar', dialogue:'Mornings are perfect for meditation.'},
  {name:'Chuck',badge:'Storm', age:36 ,location: 'Cianwood City', description: 'His Roaring Fists Do the Talking', team:'Medicham, Hitmonchan, Breloom', dialogue:'WAHAHAH! So youve come this far! Let me tell you, I am tough!'},
  {name:'Jasmine',badge:'Mineral', age:17 ,location: 'Olivine City Gym', description: 'The Steel-Clad Defense Girl', team:'Magnemite,Steelix', dialogue:'Steel will hang on to the very last!'},
  {name:'Pryce',badge:'Glacier', age:71 ,location: 'Mahogany Town', description: 'The Teacher of Winters Harshness', team:'Piloswine,Delibird', dialogue:'I am often told I wake up earlier than anybody, but the truth is it is not by my own will.'},
  {name:'Clair',badge:'Rising', age:23 ,location: 'Blackthorn City', description: 'The Blessed User of Dragon Pokémon', team:'Dragonair,Dragonite,Altaria', dialogue:'Never fear—the strongest pair of dragon masters from Blackthorn City is here!'},
];

message = signal ('Press the button');

  onLeaderDia(dialogue:string){
    this.message.set(`${dialogue}`);//template string in TypeScript or Javascript
  }

}