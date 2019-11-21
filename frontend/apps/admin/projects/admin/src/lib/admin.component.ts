import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { scaleTransition } from './components/animation/animation.component';

@Component({
  selector: 'lib-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.scss'],
  animations: [scaleTransition()]
})
export class AdminComponent implements OnInit {

  cards: object[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.initCards();
  }

  initCards(): void {
    this.cards = [
      { title: 'Resources', targetLink: '/admin/resources', cssClass: 'resources' },
      { title: 'Groups', targetLink: '/admin/groups', cssClass: 'groups' },
      { title: 'Users', targetLink: '/admin/users', cssClass: 'users' }
    ]
  }

  goto(targetLink: string): void {
    this.router.navigate([targetLink]);
  }

}