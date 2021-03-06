import { Component } from '@angular/core';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-bar',
  styles: [`
    .app-bar {
      height: 65px;
      padding: 5px 30px;
      background-color: #53BBF4;
    }
    .logo {
      color: white;
      font-size: 30px;
      font-weight: 300;
      cursor: pointer;
    }
    .link {
      color: white;
      font-size: 24px;
      font-weight: 400;
      cursor: pointer;
    }
  `],
  template: `
    <header class="app-bar row middle-xs">
      <span
        class="logo col-xs-10"
        [routerLink]="['']"
      >
        Martin's Sticky Notes
      </span>
      <nav class="col-xs-2">
        <div class="row middle-xs between-xs">
          <span class="link" (click)="launchSettings()">Settings</span>
          <span class="link" (click)="signout()">Log Out</span>
        </div>
      </nav>
    </header>
  `
})
export class AppBar {
  constructor(private authService: AuthService) {}

  signout() {
    this.authService.signout();
  }

  launchSettings() {
      alert(`You've launched settings!`);
  }
};
