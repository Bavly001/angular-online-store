import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() bgColor: string | undefined;
  @Input() textColor: string | undefined;

  home(){
    window.location.replace('/');
  }

  constructor() {}

  ngOnInit(): void {}
}
