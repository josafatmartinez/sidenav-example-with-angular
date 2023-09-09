import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-link',
  template: `
    <a
      [routerLink]="routerLink"
      routerLinkActive="active"
      [routerLinkActiveOptions]="routerLinkActiveOptions"
    >
      <span>
        <ng-content select="[icon]"></ng-content>
      </span>

      <span class="text-container">
        <ng-content></ng-content>
      </span>
    </a>
  `,
  styles: [
    `
    a {
      display: flex;
      flex-direction: row;

      align-items: center;
      justify-content: flex-start;

      gap: 8px;

      min-width: 200px;

      padding: 16px;

      box-sizing: border-box;

      text-decoration: none;
      color: var(--text-color);
      border-radius: 4px;

      transition: background-color 75ms ease-out;

      .text-container {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &:hover {
        background-color: var(--anchor-hover-background-color);
      }

      &.active {
        background-color: var(--anchor-active-background-color);
        font-weight: bold;
        color: var(--anchor-active-text-color);
      }
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavLinkComponent {
  @Input()
  routerLink?: string;

  @Input()
  routerLinkActiveOptions: { exact: boolean } = { exact: false };
}
