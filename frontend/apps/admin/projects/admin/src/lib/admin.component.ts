import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initCards();
  }

  initCards(): void {
    this.cards = [
      { title: 'Resources', targetLink: 'resources', cssClass: 'resources' },
      { title: 'Groups', targetLink: 'groups', cssClass: 'groups' },
      { title: 'Users', targetLink: 'users', cssClass: 'users' },
      { title: 'Ticketing', targetLink: 'ticket', cssClass: 'ticketing' }
    ];
  }

  goto(targetLink: string): void {
    this.router.navigate([targetLink], {relativeTo: this.route.parent});
  }

}