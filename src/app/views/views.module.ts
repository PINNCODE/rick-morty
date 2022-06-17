import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import {CharactersComponent} from "./characters/characters.component";
import {EpisodesComponent} from "./episodes/episodes.component";
import {LocationsComponent} from "./locations/locations.component";
import { HomeComponent } from './home/home.component';
import {NavbarComponent} from "../components/navbar/navbar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonComponent} from "../components/button/button.component";
import {CardComponent} from "../components/card/card.component";
import { CharacterComponent } from './character/character.component';
import {LocationCardComponent} from "../components/location-card/location-card.component";
import { LocationComponent } from './location/location.component';
import { EpisodeComponent } from './episode/episode.component';
import {EpisodeCardComponent} from "../components/episode-card/episode-card.component";


@NgModule({
  declarations: [
    CharactersComponent,
    EpisodesComponent,
    LocationsComponent,
    HomeComponent,
    NavbarComponent,
    ButtonComponent,
    CardComponent,
    CharacterComponent,
    LocationCardComponent,
    LocationComponent,
    EpisodeComponent,
    EpisodeCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
