import {Component, Input, OnInit} from '@angular/core';
import {CharacterResponse} from "../../models/character.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data: CharacterResponse | undefined;
  @Input() title: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
