import { Component, OnInit } from '@angular/core';

import { environment } from '@environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log(environment);
  }
}
