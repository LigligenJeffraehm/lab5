import { Component, signal } from '@angular/core';
import { LeaderInfoComponent } from '../leader-info/leader-info.component';

@Component({
  selector: 'app-kanto-region',
  standalone:true,
  imports: [LeaderInfoComponent],
  templateUrl: './kanto-region.component.html',
  styleUrl: './kanto-region.component.css',
})
export class KantoRegionComponent {
leaders = [
  {name:'Brock',badge:'Boulder', age:17 ,location: 'Pewter City', description: 'The Rock-Solid Pokémon Trainer!', team:'Geodude, Crobat,Golem', dialogue:'I cant believe I dont have you written down in my Blue Book of Babes! Silly me!'},
  {name:'Misty',badge:'Cascade', age:10 ,location: 'Cerulean City', description: 'The Tomboyish Mermaid!', team:'Starmie, Psyduck,Politoed', dialogue:'Oh, me? Im going swimming in the sea. There are times when want to just break free from a puny little pool and swim in the big blue!'},
  {name:'Lt. Surge',badge:'Thunder', age:35 ,location: 'Vermilion City', description: 'Lightning Lieutenant', team:'Voltorb, Pikachu, Raichu', dialogue:'The names Lt. Surge! When it comes to Electric-type Pokémon, Im number one! Youve got guts to challenge me! Im gonna zap you!'},
  {name:'Erika',badge:'Rainbow', age:21 ,location: 'Celadon City', description: 'The Nature-Loving Princess!', team:'Victreebel,Tangela,Vileplume', dialogue:'Our Leader Erika might be quiet, but shes famous around here.'},
  {name:'Koga',badge:'Soul', age:45 ,location: 'Fuchsia City', description: 'The Poisonous Ninja Master', team:'Weezing,Muk,Venomoth', dialogue:'Fwahahaha! A mere child like you dares to challenge me? Very well, I shall show you true terror as a ninja master! You shall feel the despair of poison and sleep techniques!'},
  {name:'Sabrina',badge:'Marsh', age:21 ,location: 'Saffron City', description: 'The Master of Psychic Pokémon!', team:'Kadabra,Mr. Mime,Venomoth', dialogue:'I had a vision of your arrival! I have had psychic powers since I was a child. I first learned to bend spoons with my mind. I dislike fighting, but if you wish, I will show you my powers!'},
  {name:'Blaine',badge:'Volcano', age:61 ,location: 'Cinnabar Island', description: 'The Hotheaded Quiz Master!', team:'Magmar,Ponyta', dialogue:'Hah! I am Blaine! I am the Leader of Cinnabar Gym! My fiery Pokémon will incinerate all challengers! Hah! You better have Burn Heal!'},
  {name:'Giovanni',badge:'Earth', age:45 ,location: 'Viridian City', description: 'The Self-Proclaimed Strongest Trainer', team:'Kangaskhan,Rhyperior', dialogue:'I like those who show strength! Why not put that strength to good use, in my Team Rainbow Rocket?'},
];

message = signal ('Press the button');

  onLeaderDia(dialogue:string){
    this.message.set(`${dialogue}`);//template string in TypeScript or Javascript
  }

}

/**
 * 
 *   {name: '', badge: '  ', imagePath:'https://archives.bulbagarden.net/media/upload/thumb/a/a7/Lets_Go_Pikachu_Eevee_Giovanni.png/330px-Lets_Go_Pikachu_Eevee_Giovanni.png', location: '', description:'',
          pokemonTeam: [{namePoke:'Persian', level: 8, image:'https://archives.bulbagarden.net/media/upload/thumb/b/b0/0053Persian.png/375px-0053Persian.png'},
                  {namePoke: '', level: 7, image:'https://archives.bulbagarden.net/media/upload/thumb/e/e5/0115Kangaskhan.png/375px-0115Kangaskhan.png'},
                  {namePoke: '', level: 9, image:'https://archives.bulbagarden.net/media/upload/thumb/f/f0/0464Rhyperior.png/375px-0464Rhyperior.png'}
          ]},
 */
