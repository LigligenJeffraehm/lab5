import { Component,input,output } from '@angular/core';

@Component({
  selector: 'app-leader-info',
  imports: [],
  templateUrl: './leader-info.component.html',
  styleUrl: './leader-info.component.css',
})
export class LeaderInfoComponent {
  name = input.required<string>();//required
  badge = input<string>('BSIT');
  location=input.required<string>();
  age=input.required<number>();
  description=input.required<string>();  
  team=input.required<string>();
  dialogue=input.required<string>();
  onDialogue = output<string>();

  //Methods
  markPresent(){
    this.onDialogue.emit(this.dialogue());
  }
}
