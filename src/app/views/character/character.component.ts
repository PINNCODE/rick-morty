import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../services/api.service";
import {CharacterResponse} from "../../models/character.model";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  public data: CharacterResponse | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {

  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.api.getCharacter(id).subscribe(response => {
      this.data = response;
    })
  }

  back() {
    this.router.navigate(['home/characters'])
  }

}
