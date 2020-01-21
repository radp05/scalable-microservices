import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  notificationCount = 0;
  isThemeDark = false;
  activeTheme = 'indigo-pink';

  nofitifications = [
    {
      uuid: 'eask2340mdsznkljrerwr2344',
      message: 'Hi there!',
      status: false
    },
    {
      uuid: 'lkl2340mdsznkljrerwr2344',
      message: 'You got new message',
      status: false
    },
    {
      uuid: 'af2340mdsznkljrerwr2344',
      message: 'Something happening',
      status: false
    },
    {
      uuid: 'aadf2340mdsznkljrerwr2344',
      message: 'You got this.',
      status: true
    },
    {
      uuid: 'eask2340mdsznkljrerwr2344',
      message: 'Hi there!',
      status: false
    },
    {
      uuid: 'lkl2340mdsznkljrerwr2344',
      message: 'You got new message',
      status: false
    },
    {
      uuid: 'af2340mdsznkljrerwr2344',
      message: 'Something happening',
      status: false
    },
    {
      uuid: 'aadf2340mdsznkljrerwr2344',
      message: 'You got this.',
      status: true
    }
  ];

  @Output() sidenavStatus = new EventEmitter();
  constructor(
    private utilService: UtilService,
    private authService: AuthService
    ) { }

  themes: string[] = [
    'deeppurple-amber',
    'indigo-pink',
    'pink-bluegrey',
    'purple-green',
  ];

  ngOnInit() {
    this.notificationCount = this.nofitifications.filter(n => !n.status).length;
  }

  toggle() {
    this.sidenavStatus.emit();
    // this.utilService.changeSiberStatus.next();
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
