import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
/* @Output() optionSelected = new EventEmitter(); */

  constructor() {}
  /* onSelect(opt: string){
      this.optionSelected.emit(opt);
    } */
  ngOnInit() {  
  
  }


}
