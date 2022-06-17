import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CharactersComponent} from "./characters/characters.component";
import {LocationsComponent} from "./locations/locations.component";
import {EpisodesComponent} from "./episodes/episodes.component";
import {CharacterComponent} from "./character/character.component";
import {LocationComponent} from "./location/location.component";
import {EpisodeComponent} from "./episode/episode.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'characters',
        component: CharactersComponent,
      },
      {
        path: 'character/:id',
        component: CharacterComponent
      },
      {
        path: 'locations',
        component: LocationsComponent
      },
      {
        path: 'location/:id',
        component: LocationComponent
      },
      {
        path: 'episodes',
        component: EpisodesComponent
      },
      {
        path: 'episode/:id',
        component: EpisodeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
