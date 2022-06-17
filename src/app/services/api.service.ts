import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, mergeMap, Observable} from "rxjs";
import {CharactersResponse} from "../models/characters.model";
import {LocationsResponse} from "../models/locations.model";
import {LocationResponse} from "../models/location.model";
import {CharacterResponse} from "../models/character.model";
import {EpisodesResponse} from "../models/episodes.model";
import {EpisodeResponse} from "../models/episode.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URL_BASE = 'https://rickandmortyapi.com/api/';

  constructor(
    private http: HttpClient
  ) { }

  public getCharacters(): Observable<CharactersResponse>{
    return this.http.get<CharactersResponse>(`${this.URL_BASE}/character`);
  }

  public getCharacter(id: any ): Observable<CharacterResponse>{
    return this.http.get<CharacterResponse>(`${this.URL_BASE}/character/${id}`);
  }

  public getCharacterName(name: any ): Observable<CharactersResponse>{
    return this.http.get<CharactersResponse>(`${this.URL_BASE}/character/?name=${name}`);
  }

  public getLocations(): Observable<LocationsResponse>{
    return this.http.get<LocationsResponse>(`${this.URL_BASE}/location`);
  }

  public getLocationsByName(name: any): Observable<LocationsResponse>{
    return this.http.get<LocationsResponse>(`${this.URL_BASE}/location/?name=${name}`);
  }

  public getLocationCharacters(id: any): Observable<any>{
    return this.http.get<LocationResponse>(`${this.URL_BASE}/location/${id}`).pipe(
      map((response: LocationResponse) => {
        response.residents = response.residents.map( (resident: any) => {
          resident = resident.split('/')
          resident = parseInt(resident[resident.length-1])
          return resident;
        })
        return response;
      }),
      mergeMap( (responseLocation: LocationResponse) => {
        return this.http.get<any>(`${this.URL_BASE}/character/${responseLocation.residents.toString()}`)
          .pipe(
            map(value => {
              return {
                characters: value,
                location_data:  responseLocation
              };
            })
          )
      })
    );
  }

  public getEpisodes(): Observable<EpisodesResponse>{
    return this.http.get<EpisodesResponse>(`${this.URL_BASE}/episode`);
  }

  public getEpisodesByName(name: any): Observable<EpisodesResponse>{
    return this.http.get<EpisodesResponse>(`${this.URL_BASE}/episode/?name=${name}`);
  }

  public getEpisodeCharacters(id: any): Observable<any>{
    return this.http.get<EpisodeResponse>(`${this.URL_BASE}/episode/${id}`).pipe(
      map( (response: any) => {
        response.characters = response.characters.map( (character: any) => {
          character = character.split('/');
          character = parseInt(character[character.length-1])
          return character;
        })
        return response;
      }),
      mergeMap( (responseEpisode: any) => {
        return this.http.get<any>(`${this.URL_BASE}/character/${responseEpisode.characters.toString()}`).pipe(
          map(value => {
            return {
              characters: value,
              episode_data:  responseEpisode
            };
          })
        )
      })
    )
  }

}
