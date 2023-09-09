import { ChangeDetectionStrategy, Component, HostBinding, HostListener } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  template: `
      <div class="sidenav-body-container">
        <div class="sidenav-body">
          <div style="padding: 1rem">
            <h1>Sidenav</h1>
            <app-sidenav-link routerLink="/home">
              <span icon>🏠</span>
              <span>Home</span>
            </app-sidenav-link>
            <app-sidenav-link routerLink="/tasks">
              <span icon>📋</span>
              <span>Tasks</span>
            </app-sidenav-link>
            <app-sidenav-link routerLink="/settings">
              <span icon>⚙</span>
              <span>Settings</span>
            </app-sidenav-link>
          </div>
        </div>
      </div>
      <button
          class="toggle-button"
          (click)="this.sidenavService.toggleSidenav()"
          [class.is-flipped]="sidenavService.isExpanded"
        >
        <span class="mat-icon">➡</span>
      </button>
  `,
  styles: [
    `
    :host {
      height: 100vh;
      width: var(--sidenav-collapsed-width);
      &.is-expanded {
        width: var(--sidenav-width);
      }
      box-sizing: border-box;
      position: sticky;
      top: 0;
      background-color: var(--sidenav-bacground-color);
      border-right: 2px solid var(--sidenav-border-color);
      transition: width 300ms cubic-bezier(.02,.68,.63,.98);
    }
    .toggle-button {
      display: flex;

      align-items: center;
      justify-content: center;

      $size: 25px;
      width: $size;
      height: $size;
      margin: 0;
      padding: 0;

      position: absolute;
      top: 48px;
      right: calc($size / -2) - 2px;

      border: 1px solid gray;
      border-radius: 50%;

      background-color: white;

      cursor: pointer;

      &:hover {
        border: 2px solid var(--anchor-active-text-color);
      }

      &.is-flipped {
        transform: rotate(-180deg);
      }

      .mat-icon {
        font-size: 1.5em;
        width: fit-content;
        height: fit-content;
      }
    }
    .sidenav-body-container {
      overflow-y: auto;
      height: 100%;
      padding: 16px;
      box-sizing: border-box;
    }
    .sidenav-body {
      width: 100%;
      overflow-x: hidden;
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  constructor(public sidenavService: SidenavService) { }

  @HostBinding('class.is-expanded')
  get isExpanded() {
    return this.sidenavService.isExpanded;
  }
}
