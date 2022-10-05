import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() bgColor: string | undefined;
  @Input() textColor: string | undefined;

  constructor() {}

  active = window.location.pathname.replace('/', '');

  ngOnInit(): void {}
}
