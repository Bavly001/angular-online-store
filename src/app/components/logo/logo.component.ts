import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <div
      [ngStyle]="{ height: size + 'vh', width: size + 'vh' }"
      class="rounded-circle logo d-flex justify-content-center align-items-center flex-column overflow-hidden position-relative shadow "
      [ngClass]="
        bgColor === 'navy' ? 'bg-navy text-beige' : 'bg-beige text-navy'
      "
    >
      <h1
        [ngStyle]="{ fontSize: font_size + 'vh' }"
        class="display-6 m-0 fw-bold"
      >
        One Place
      </h1>
      <h1
        [ngStyle]="{ fontSize: font_size + 'vh' }"
        class="display-6 m-0 text-orange"
      >
        - store -
      </h1>
      <div
        [ngStyle]="{
          rotate: 45 + 'deg',
          width: triangle_size + 'vh',
          height: triangle_size + 'vh'
        }"
        class="bg-orange triangle position-absolute top-90"
      ></div>
    </div>
  `,
  styles: [],
})
export class LogoComponent implements OnInit {
  @Input() size: number | undefined;
  @Input() bgColor: string | undefined;


  font_size: number | undefined;
  triangle_size: number | undefined;

  constructor() {}

  ngOnInit(): void {
    if (this.size !== undefined) {
      this.font_size = this.size / 6;
      this.triangle_size = this.size / 1.5;
    }
  }
}
