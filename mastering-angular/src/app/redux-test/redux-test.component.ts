import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { Observable} from 'rxjs/Observable';

interface AppState{
  message: string;
}

@Component({
  selector: 'app-redux-test',
  templateUrl: './redux-test.component.html',
  styleUrls: ['./redux-test.component.css']
})
export class ReduxTestComponent implements OnInit {

  message$ : Observable<string>;

  constructor(private store : Store<AppState>) {
    this.message$ = this.store.select('message');
  }

  spanishFunction(){
    this.store.dispatch({type: 'SPANISH'});
  }

  frenchFunction(){
    this.store.dispatch({type: 'FRENCH'});
  }

  ngOnInit() {
  }

}
