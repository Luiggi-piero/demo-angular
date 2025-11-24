import { Component } from '@angular/core';
import { ContainerModule } from './container/container.module';
import { DemoDirective } from './directives/demo.directive';
import { LikeComponent } from './like/like.component';
import { ProductBemModule } from './product-bem/product-bem.module';
import { ProductModule } from './product/product.module';
import { TaskListNewSyntaxComponent } from './task-list-new-syntax/task-list-new-syntax.component';
import { TaskListOnlyStandaloneComponent } from './task-list-only-standalone/task-list-only-standalone.component';
import { TaskListModule } from './task-list/task-list.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserForm2Component } from './user-form2/user-form2.component';
import { ShowInfoComponent } from './show-info/show-info.component';

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
    TaskListNewSyntaxComponent,
    DemoDirective,
    UserForm2Component,
    ShowInfoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demo-angular';
}
