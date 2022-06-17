import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  @Output() inputValue = new EventEmitter<any>();
  searchBarForm: FormGroup;
  showBar = true;
  public searchText: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.searchBarForm = this.fb.group({
      text: ['',Validators.required]
    });
  }

  ngOnInit() {
    // @ts-ignore
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      let url = event.url.split('/')
      this.showBar = url.length <= 3;
      console.log(event.url);
    });
  }

  searchBarListener(){
    if (this.searchBarForm.valid){
      this.inputValue.emit(this.searchBarForm?.controls['text'].value)
    } else {
      this.inputValue.emit(null)
    }
  }

}
