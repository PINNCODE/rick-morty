import {Component, Input, OnInit} from '@angular/core';
import {LocationsCharactersResponse} from "../../models/locationsCharacters.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  @Input() data: any | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.api.getLocationCharacters(id).subscribe(response => {
      this.data = response;
    })
  }

  back(){
    this.router.navigate(['home/locations'])
  }

}
