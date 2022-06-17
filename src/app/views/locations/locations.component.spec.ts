import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsComponent } from './locations.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {StoreModule} from "@ngrx/store";
import {AppReducers} from "../../redux/reducers/app-reducers.reducer";
import {ApiService} from "../../services/api.service";
import {of} from "rxjs";
import {getLocations} from "../../test/tests_data";
import {SearchBarService} from "../../services/search-bar.service";

describe('LocationsComponent', () => {
  let component: LocationsComponent;
  let service: ApiService;
  let searchBar: SearchBarService;
  let fixture: ComponentFixture<LocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        StoreModule.forRoot(AppReducers)
      ]
    })
    .compileComponents();
    service = TestBed.inject(ApiService)
    searchBar = TestBed.inject(SearchBarService)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call GetAllLocations', () => {
    spyOn(service,'getLocations').and.returnValue(of(<any>getLocations))
    fixture.detectChanges()
  })

  it('should call searchBar and getlocations by name', () => {
    searchBar.searchBar.next('earth')
    spyOn(service,'getLocationsByName').and.returnValue(of(<any>{atu}))
    fixture.detectChanges()
  });

});
