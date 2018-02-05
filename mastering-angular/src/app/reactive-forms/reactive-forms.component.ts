import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  form = new FormGroup({
    username : new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    password : new FormControl('', Validators.required),
  })

  /* Below is an example to be used for FormBuilder */

  form2 = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  })

  constructor(fb: FormBuilder) {
    /* Using form builder */
    fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    })


  }

  ngOnInit() {
  }

  get usernameMethod(){
    return this.form.get('username');
  }
}
