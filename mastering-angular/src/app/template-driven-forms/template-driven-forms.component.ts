import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {


  contactMethods = [
    {id : 1 , name: 'Email'},
    {id : 2 , name: 'Phone'}
  ]




  fullName = '';
  constructor() { }

  ngOnInit() {
  }

  log(x){
    console.log(x);
  }


  onSubmit(f){
    console.log(f);
    this.fullName = f.value;
  }
}
