import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-at',
  templateUrl: './header-at.component.html',
  styleUrls: ['./header-at.component.css']
})
export class HeaderAtComponent implements OnInit {
  // @Output() featureSelected= new EventEmitter<string>();

  // onSelect(feature:string){
  //   this.featureSelected.emit(feature);
  // }

  constructor() { }

  ngOnInit() {
  }

}
