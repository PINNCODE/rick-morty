import {Component, Input, OnInit} from '@angular/core';
import {LocationResponse} from "../../models/location.model";
import {EpisodesResponse} from "../../models/episodes.model";
import {EpisodeResponse} from "../../models/episode.model";

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss']
})
export class EpisodeCardComponent implements OnInit {

  @Input() data: EpisodeResponse | undefined;
  @Input() title: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
