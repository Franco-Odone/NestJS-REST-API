import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';
import { UpdateTaskDTO } from './dataTransferObject/task.dto';

@Injectable()
export class TasksService {
  // Arreglo de objetos de la clase Task[]
  // Simulate a database
  private tasks: Task[] = [
    {
      id: '1',
      title: 'firstTask',
      description: 'some task',
      status: TaskStatus.PENDING,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }
  // Al crear algo se reciben parámetros dentro de este método
  createTask(title: string, description: string) {
    const task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);

    return task;
  }
  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return this.tasks;
  }
  //:Task para que TS sepa que se retorna un objeto tipo Task
  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }
  updateTask(id: string, updatedFields: UpdateTaskDTO): Task {
    const task = this.getTaskById(id);
    const updatedTask = Object.assign(task, updatedFields);
    this.tasks = this.tasks.map((task) =>
      task.id === id ? updatedTask : task,
    );
    return updatedTask;
  }
}
