import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {LocationResponse} from "../../models/location.model";
import {map} from "rxjs";
import {Router} from "@angular/router";
import {SearchBarService} from "../../services/search-bar.service";
import {Store} from "@ngrx/store";
import {IAppState} from "../../redux/reducers/app-reducers.reducer";
import {LocationsActionClass} from "../../redux/actions/locations.actions";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit, OnDestroy {

  public locations: LocationResponse[] | undefined;
  public _reduxLocations: any;

  constructor(
    private api: ApiService,
    private router: Router,
    private searchBar: SearchBarService,
    private _store: Store<IAppState>
  ) {
    this._store.select('characters').subscribe(resp => {
      this._reduxLocations = resp;
    });
  }

  ngOnInit(): void {
    this.getAllLocations();

    this.searchBar.searchBar.subscribe( response => {
      if (response){
        this.api.getLocationsByName(response).pipe(
          map(response => {
            response.results = response.results.map(location => {
              // @ts-ignore
              location.name = location.name.split(' ').length >= 1 ? location.name.split(' ')[0] + location.name.split(' ')[1] : location.name;
              return location
            })
            return response;
          })
        )
          .subscribe(
          response => {
            this.locations = response.results;
          }
        )
      } else {
        this.getAllLocations();
      }
    })

  }

  getAllLocations() {
    if (this._reduxLocations.load) {
      this.locations = this._reduxLocations.data;
    } else {
      this.api.getLocations().pipe(
        map(response => {
          response.results = response.results.map(location => {
            location.name = location.name.split(' ').length >= 1 ? location.name.split(' ')[0] + location.name.split(' ')[1] : location.name;
            return location
          })
          return response;
        })
      ).
      subscribe( response => {
        this._store.dispatch(LocationsActionClass.SuccessAction({ payload: response.results}))
        this.locations = response.results;
      })
    }
  }

  openDetail(id: any){
    this.router.navigate(['home/location',id])
  }

  ngOnDestroy(): void {
    this.searchBar.searchBar.next(null);
  }

}
