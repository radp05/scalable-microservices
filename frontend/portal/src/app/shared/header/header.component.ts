import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { AuthService } from 'src/app/auth/auth.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  notificationCount = 0;
  isThemeDark = false;
  activeTheme = 'indigo-pink';

  nofitifications = [];

  @Output() sidenavStatus = new EventEmitter();
  constructor(
    private utilService: UtilService,
    private authService: AuthService,
    private sharedService: SharedService
    ) { }

  themes: string[] = [
    'deeppurple-amber',
    'indigo-pink',
    'pink-bluegrey',
    'purple-green',
  ];

  ngOnInit() {
    const userId = '123123';
    this.sharedService.fetchNotifications(userId).subscribe((res: any) => {
      this.nofitifications = JSON.parse(res.data);
      this.notificationCount = this.nofitifications.filter(n => !n.status).length;
      console.log(JSON.parse(res.data));
      console.log(res);
    })
  }

  toggle() {
    this.sidenavStatus.emit();
  }

  toggleDarkness() {
    // this.isThemeDark = !this.isThemeDark;
    this.utilService.themeStatus.next({ theme: this.activeTheme, darkness: this.isThemeDark });
    console.log(this.isThemeDark);
  }

  setActiveTheme(theme: string, darkness: boolean = null) {
    this.activeTheme = theme;
    this.utilService.themeStatus.next({ theme: theme, darkness: darkness });
  }

  logout() {
    this.authService.logout();
  }

}
