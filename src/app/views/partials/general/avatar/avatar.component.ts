import { Component, Input, OnInit } from '@angular/core';
import { User } from '@core/interfaces/user';

@Component({
  selector: 'app-partials-avatar',
  template: `
    <span class="userpic userpic-circle">
      <img *ngIf="user.avatar" [src]="user.avatar" alt="">
      <span *ngIf="!user.avatar && user.name">{{ user.name.charAt(0).toUpperCase() }}</span>
    </span>
  `
})
export class PartialsAvatarComponent implements OnInit {
  @Input() user: User;

  constructor() {
  }

  ngOnInit() {
  }

}
