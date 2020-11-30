import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //Input
  @Input() childInListHero;

  //Output
  @Output() childOutHeroName = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  //Output
  heroesGetHeroName(heroesHeroName: string): void {
    console.log(heroesHeroName)
    this.childOutHeroName.emit( heroesHeroName );
  }
}
