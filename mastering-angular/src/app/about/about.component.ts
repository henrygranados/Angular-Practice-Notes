import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public name: string = "Henry";
  public myvar: string;
  
  @Input() person;
  @Output() onYell = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  myFunction(e){
    console.log(e);
  }
 // Emmitting the custom event
  fireOnYellEvent(e){
    this.onYell.emit();
  }

}
