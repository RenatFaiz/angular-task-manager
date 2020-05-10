import {Injectable} from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../data/TestData';
import {Task} from '../model/Task';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() {
    // this.fillTasks();
  }

  fillCategories() {
    this.categoriesSubject.getValue();
  }

  fillTasks() {
    this.tasksSubject.next(TestData.tasks);
  }

  fillTasksByCategory(category: Category) {
    const tasksFiltered = TestData.tasks.filter(task => task.category === category);
    this.tasksSubject.next(tasksFiltered);
  }

  // Unnecessary at this moment
  // isTaskCompleted(task: Task) {
  //   if (task.completed === true) {
  //     return true;
  //   }
  // }
}
