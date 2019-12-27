import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

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
  constructor(private utilService: UtilService) { }

  themes: string[] = [
    'deeppurple-amber',
    'indigo-pink',
    'pink-bluegrey',
    'purple-green',
  ];

  ngOnInit() {
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

}
