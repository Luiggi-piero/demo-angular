import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  inputMessage = 'Ingresa tus nombres';
  disabledButton = true;

  constructor() {
    setTimeout(() => {
      this.disabledButton = false;
    }, 2000);
  }

  clickSaveData() {
    console.log('Guardando datos!');
  }

  input(event: Event): void {
    const inputEvent = event as InputEvent;
    console.log('Evento input!', inputEvent);
  }
}
