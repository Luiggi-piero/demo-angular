import { Component } from '@angular/core';
import { ContainerModule } from './container/container.module';
import { LikeComponent } from './like/like.component';
import { ProductModule } from './product/product.module';
import { UserFormComponent } from './user-form/user-form.component';
import { ProductBemModule } from './product-bem/product-bem.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LikeComponent, UserFormComponent, ContainerModule, ProductModule, ProductBemModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demo-angular';
}
