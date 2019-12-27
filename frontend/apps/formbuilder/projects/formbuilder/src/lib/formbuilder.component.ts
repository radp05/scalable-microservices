import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-formbuilder',
  template: `
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./formbuilder.component.scss'],
})
export class FormbuilderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
