import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HoennRegionService {
  private registry = signal([
    {
      name: 'Roxanne',
      badge: 'The Stone Badge',
      town: 'Rustboro City',
      specialty:'Stone',
      team: ['Geodude', 'Nosepass', 'Golem'],
      items: ['Hard Stone', 'Rock Incense', 'Eviolite']
    },
    {
      name: 'Brawly',
      badge: 'The Knuckle Badge',
      town: 'Dewford Town',
      specialty: 'Fighting',
      team: ['Machop', 'Meditite', 'Makuhita'],
      items: ['Black Belt', 'Focus Band', 'Sitrus Berry']
    },
    {
      name: 'Wattson',
      badge: 'The Dynamo Badge',
      town: 'Mauville City',
      specialty: 'Electric',
      team: ['Magnemite', 'Voltorb', 'Magneton'],
      items: ['Magnet', 'Quick Claw', 'BrightPowder']
    },

    {
      name: 'Flannery',
      badge: 'The Heat Badge',
      town: 'Lavaridge Town',
      specialty: 'Fire',
      team: ['Slugma', 'Numel', 'Torkoal'],
      items: ['Charcoal', 'Heat Rock', 'White Herb']
    },

    {
      name: 'Norman',
      badge: 'The Balance Badge',
      town: 'Petalburg City',
      specialty: 'Normal',
      team: ['Vigoroth', 'Linoone', 'Slaking'],
      items: ['Silk Scarf', 'Leftovers', 'Choice Band']
    },
    {
      name: 'Tate & Liza',
      badge: 'The Mind Badge',
      town: 'Mossdeep City',
      specialty: 'Psychic',
      team: ['Solrock', 'Lunatone', 'Claydol'],
      items: ['Twisted Spoon', 'Light Clay', 'Sitrus Berry']
    },

    {
      name: 'Juan',
      badge: 'The Rain Badge',
      town: 'Sootopolis City',
      specialty: 'Water',
      team: ['Sealeo', 'Whiscash', 'Kingdra'],
      items: ['Mystic Water', 'Damp Rock', 'Leftovers']
    },
    {
      name: 'Winona',
      badge: 'The Feather Badge',
      town: 'Fortree City',
      specialty: 'Flying',
      team: ['Swellow', 'Pelipper', 'Altaria'],
      items: ['Sharp Beak', 'Scope Lens', 'Lum Berry']
    }


  ]);
  hoennLeaders=this.registry.asReadonly();
}
