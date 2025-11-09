import { Component } from '@angular/core';

@Component({
  selector: 'app-like',
  standalone: true,
  template: `
    <div class="container">
      <img src="assets/images/dogo-argentino.png" alt="dogo-argentino" />
    </div>
  `,
  styles: `
    .container div{background-color: silver}
  `,
})
export class LikeComponent {}
