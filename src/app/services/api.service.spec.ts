import {TestBed} from '@angular/core/testing';

import {ApiService} from './api.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";
import {
  getCharacterData,
  getCharacterName,
  getCharactersData, getEpisodeDetail, getEpisodeName,
  getEpisodes, getLocationDetail,
  getLocationName,
  getLocations
} from "../test/tests_data";

class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
}

describe('ApiService', () => {
  let service: ApiService;
  let httpClientMock: HttpClientMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: HttpClient,
          useClass: HttpClientMock
        }
      ]
    });
    service = TestBed.inject(ApiService);
    httpClientMock = <any>TestBed.get(HttpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getCharacters', () => {
    httpClientMock.get.and.returnValue(of(getCharactersData));
    service.getCharacters().subscribe(
      response => {
        expect(response).toEqual(<any>getCharactersData)
      }
    );
  });

  it('should call getCharacter', () => {
    httpClientMock.get.and.returnValue(of(getCharacterData));
    service.getCharacter(1).subscribe(
      response => {
        expect(response).toEqual(<any>getCharacterData)
      }
    );
  });

  it('should call getCharacterName', () => {
    httpClientMock.get.and.returnValue(of(getCharacterName));
    service.getCharacterName('jessica').subscribe(
      response => {
        expect(response).toEqual(<any>getCharacterName)
      }
    );
  });

  it('should call getLocations', () => {
    httpClientMock.get.and.returnValue(of(getLocations));
    service.getLocations().subscribe(
      response => {
        expect(response).toEqual(<any>getLocations)
      }
    );
  });

  it('should call getLocationsByName', () => {
    httpClientMock.get.and.returnValue(of(getLocationName));
    service.getLocationsByName('earth').subscribe(
      response => {
        expect(response).toEqual(<any>getLocationName)
      }
    );
  });

  it('should call getEpisodes', () => {
    httpClientMock.get.and.returnValue(of(getEpisodes));
    service.getEpisodes().subscribe(
      response => {
        expect(response).toEqual(<any>getEpisodes)
      }
    );
  });

  it('should call getEpisodesByName', () => {
    httpClientMock.get.and.returnValue(of(getEpisodeName));
    service.getEpisodesByName('pilot').subscribe(
      response => {
        expect(response).toEqual(<any>getEpisodeName)
      }
    );
  });

  it('should call getLocationCharacters', () => {
    httpClientMock.get.and.returnValue(of(getLocationDetail));
    service.getLocationCharacters(1).subscribe(
      response => {
        expect(response).toEqual(<any>{
          "characters": {
            "id": 1,
            "name": "Earth (C-137)",
            "type": "Planet",
            "dimension": "Dimension C-137",
            "residents": [
              38,
              45,
              71,
              82,
              83,
              92,
              112,
              114,
              116,
              117,
              120,
              127,
              155,
              169,
              175,
              179,
              186,
              201,
              216,
              239,
              271,
              302,
              303,
              338,
              343,
              356,
              394
            ],
            "url": "https://rickandmortyapi.com/api/location/1",
            "created": "2017-11-10T12:42:04.162Z"
          },
          "location_data": {
            "id": 1,
            "name": "Earth (C-137)",
            "type": "Planet",
            "dimension": "Dimension C-137",
            "residents": [
              38,
              45,
              71,
              82,
              83,
              92,
              112,
              114,
              116,
              117,
              120,
              127,
              155,
              169,
              175,
              179,
              186,
              201,
              216,
              239,
              271,
              302,
              303,
              338,
              343,
              356,
              394
            ],
            "url": "https://rickandmortyapi.com/api/location/1",
            "created": "2017-11-10T12:42:04.162Z"
          }
        })
      }
    );
  });

  it('should call getEpisodeCharacters', () => {
    httpClientMock.get.and.returnValue(of(getEpisodeDetail));
    service.getEpisodeCharacters(1).subscribe(
      response => {
        expect(response).toEqual(<any>response)
      }
    );
  });


});
