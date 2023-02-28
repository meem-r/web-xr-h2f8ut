import { Component } from '@angular/core';

import {XR } from './xr';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  
  ngAfterViewInit() {
    let xr = new XR(); 
    xr.stable.subscribe(next => {
      document.body.classList.add('stabilized');
    }) 
  }
}
