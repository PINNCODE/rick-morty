import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {SearchBarService} from "../../services/search-bar.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private api: ApiService,
    private searchBar: SearchBarService
  ) {}

  searchBarValue(event: any){
    this.searchBar.searchBar.next(event)
  }

}
