import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnlyTextDirective } from '../directives/only-text.directive';

@Component({
  selector: 'app-user-form2',
  standalone: true,
  imports: [FormsModule, OnlyTextDirective],
  templateUrl: './user-form2.component.html',
  styleUrl: './user-form2.component.scss',
})
export class UserForm2Component {
  texto = '';
  show(): void {
    console.log(this.texto);
  }
}
