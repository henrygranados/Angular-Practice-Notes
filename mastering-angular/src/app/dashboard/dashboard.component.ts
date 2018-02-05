import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

public ninja : string;
  constructor(private _route : ActivatedRoute) { 
    this.ninja = _route.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
