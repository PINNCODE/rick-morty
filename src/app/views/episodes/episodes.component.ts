import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {EpisodesResponse} from "../../models/episodes.model";
import {Router} from "@angular/router";
import {SearchBarService} from "../../services/search-bar.service";
import {Store} from "@ngrx/store";
import {IAppState} from "../../redux/reducers/app-reducers.reducer";
import {EpisodesActionClass} from "../../redux/actions/episodes.actions";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  public data: EpisodesResponse | undefined;
  private _reduxEpisodes: any;

  constructor(
    private api: ApiService,
    private router: Router,
    private searchBar: SearchBarService,
    private _store: Store<IAppState>
  ) {
    this._store.select('episodes').subscribe(resp => {
      this._reduxEpisodes= resp;
    });
  }

  ngOnInit(): void {
    this.getAllEpisodes();

    this.searchBar.searchBar.subscribe( response => {
      if (response){
        this.api.getEpisodesByName(response).subscribe( response => {
          this.data = response;
        })
      } else {
        this.getAllEpisodes();
      }
    })
  }

  getAllEpisodes() {
    if (this._reduxEpisodes.load){
      this.data = this._reduxEpisodes.data;
    } else {
      this.api.getEpisodes().subscribe( response => {
        this._store.dispatch(EpisodesActionClass.SuccessAction({payload: response}))
        this.data = response;
      })
    }
  }

  getDetail(id: any){
    this.router.navigate(['home/episode',id]);
  }

}
