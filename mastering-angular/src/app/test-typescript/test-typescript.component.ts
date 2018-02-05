import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-typescript',
  templateUrl: './test-typescript.component.html',
  styleUrls: ['./test-typescript.component.css']
})
export class TestTypescriptComponent implements OnInit {


  isActive: boolean = true; // use for class binding;
  isActive2: boolean = true; // use for style binding

  //constructor(public x?: string, public y?:string) {  // ? means that the param is Optional
    constructor() { 
    
    // Example 1 - Enums
    let myvar = 20;
    console.log(myvar);
    console.log(Colors.Green);

    // Example 2 - type assertions or Casting
    let message = 'abc';
    let endsWithC =  (<string>message).endsWith('c'); // Option 1  OR
    let alternativeWay =  (message as string).endsWith('c'); // Option 2
    console.log(endsWithC);

    // Example 3 Arrow Functions
    let displayMessage = function(message){
      console.log(message);
    }
    
    let displayMessage2 = (message) => console.log(message);

  }

  ngOnInit() {
  }

  sumNumbers() {

  }
}

//var myobj = new TestTypescriptComponent( 2 , 4);


// Used to delcare constants
enum Colors{
  Red = 0,
  Green = 1,
  Blue = 2
}
