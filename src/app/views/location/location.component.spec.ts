import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationComponent } from './location.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {of} from "rxjs";
import {ApiService} from "../../services/api.service";

describe('LocationComponent', () => {
  let component: LocationComponent;
  let service: ApiService;
  let fixture: ComponentFixture<LocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
    service = TestBed.inject(ApiService)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    spyOn(service,'getLocationCharacters').and.returnValue(of({}))
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call backButton', () => {
    const navigateBack = spyOn(component,'back').and.callThrough()
    component.back();
    expect(navigateBack).toHaveBeenCalled()
  });
});
