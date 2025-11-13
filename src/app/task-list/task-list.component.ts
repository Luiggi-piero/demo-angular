import { Component } from '@angular/core';
import {
  IPriority,
  IStatus,
  ITask,
  StatusType,
} from '../models/components.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  readonly LIST_STATES: StatusType[] = ['COMPLETED', 'PROGRESS', 'PENDING'];
  readonly LIST_OBJECT_STATES: IStatus[] = [
    {
      key: 'COMPLETED',
      text: 'Completado',
    },
    {
      key: 'PROGRESS',
      text: 'En progreso',
    },
    {
      key: 'PENDING',
      text: 'Pendiente',
    },
  ];

  readonly PRIORITY_LIST: IPriority[] = [
    { key: 'HIGH', text: 'Alto' },
    { key: 'MEDIUM', text: 'Medio' },
    { key: 'LOW', text: 'Baja' },
  ];

  list_task: ITask[] = [
    { priority: 'HIGH', status: 'COMPLETED', task: 'Lavar la ropa' },
    { priority: 'LOW', status: 'PENDING', task: 'Tender la cama' },
  ];

  inputValue = '';

  // task: ITask = {
  //   priority: 'MEDIUM',
  //   task: 'Aprender typescript',
  //   status: 'COMPLETED',
  // };

  colorText = 'white';

  changeStatus(index: number): void {
    console.log(this.list_task[index]);
  }

  updateTask(): void {
    this.list_task[1] = {
      priority: 'LOW',
      status: 'PENDING',
      task: this.inputValue,
    };
  }

  refresh(): void {
    this.list_task = [
      { priority: 'HIGH', status: 'COMPLETED', task: 'Lavar la ropa' },
      { priority: 'LOW', status: 'PENDING', task: 'Tender la cama' },
    ];
  }

  trackByItems(index: number, item: ITask) {
    return index; // retorna el identificador del elemento: puede ser su id o indice, no se debe repetir
  }
}
