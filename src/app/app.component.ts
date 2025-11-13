import { Component } from '@angular/core';
import { ContainerModule } from './container/container.module';
import { LikeComponent } from './like/like.component';
import { ProductBemModule } from './product-bem/product-bem.module';
import { ProductModule } from './product/product.module';
import { TaskListNewSyntaxComponent } from './task-list-new-syntax/task-list-new-syntax.component';
import { TaskListOnlyStandaloneComponent } from './task-list-only-standalone/task-list-only-standalone.component';
import { TaskListModule } from './task-list/task-list.module';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LikeComponent,
    UserFormComponent,
    ContainerModule,
    ProductModule,
    ProductBemModule,
    TaskListModule,
    TaskListOnlyStandaloneComponent,
    TaskListNewSyntaxComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demo-angular';
}
