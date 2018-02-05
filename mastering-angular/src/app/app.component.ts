import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // Input() 1
  persontoBePassed = {
    name: 'Ninja',
    age: 20
  }

  // Input() 2
  isFavorite = true;

  // Output()
  yell(e){
    alert('Listening in Parent Component');
  }

  // Output()
  onFavoriteChange(e){
    console.log('Recieved input from child component');
  }
}
