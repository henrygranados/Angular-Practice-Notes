import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alias-input',
  templateUrl: './alias-input.component.html',
  styleUrls: ['./alias-input.component.css']
})
export class AliasInputComponent  {

@Input('some-alias') isFavorite : boolean;
@Output('change') doClick = new EventEmitter();


  onclick(){
   console.log(this.isFavorite);
  }

  fireEvent(e){
    this.doClick.emit(e);
  }

}
