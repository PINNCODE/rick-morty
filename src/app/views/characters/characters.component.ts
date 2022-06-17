import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {map} from "rxjs";
import {Router} from "@angular/router";
import {SearchBarService} from "../../services/search-bar.service";
import {Store} from "@ngrx/store";
import {IAppState} from "../../redux/reducers/app-reducers.reducer";
import {CharactersActionClass} from "../../redux/actions/characters.actions";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {

  public characters: any[] = [];
  public _reduxCharacters: any;

  constructor(
    private api: ApiService,
    private searchBar: SearchBarService,
    private router: Router,
    private _store: Store<IAppState>,
  ) {
    this._store.select('characters').subscribe(resp => {
      this._reduxCharacters = resp;
    });
  }

  ngOnInit(): void {
    this.getAllCharacters();

    this.searchBar.searchBar.subscribe( response  => {
      if (response) {
        this.api.getCharacterName(response).subscribe(  response  => {
          this.characters = response.results
        });
      } else {
        this.getAllCharacters();
      };
    })
  }

  getAllCharacters(){
    if (this._reduxCharacters.load) {
      this.characters = this._reduxCharacters.data;
    } else {
      this.api.getCharacters()
        .pipe(
          map(response => {
            response.results =response.results.map(result => {
              return result
            })
            return response;
          })
        )
        .subscribe( response => {
          this._store.dispatch(CharactersActionClass.SuccessAction({payload: response.results}))
          this.characters = response.results;
        })
    }
  }

  openDetail(id: number) {
    this.router.navigate(['home/character',id])
  }

  ngOnDestroy(): void {
    this.searchBar.searchBar.next(null)
  }

}
