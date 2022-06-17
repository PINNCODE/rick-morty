import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  public searchBar : BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() {}
}
