import {Component, Input, OnInit} from '@angular/core';
import {CharacterResponse} from "../../models/character.model";
import {LocationResponse} from "../../models/location.model";

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent implements OnInit {

  @Input() data: LocationResponse | undefined;
  @Input() title: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
