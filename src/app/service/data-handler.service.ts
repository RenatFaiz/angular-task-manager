import {Injectable} from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../data/TestData';
import {Task} from '../model/Task';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() {
    // this.fillTasks();
  }

  // getCategories(): Category[] {
  //   return TestData.categories;
  // }

  // fillCategories() {
  //   this.categoriesSubject.next(TestData.categories);
  // }

  fillTasks() {
    this.tasksSubject.next(TestData.tasks);
  }

  fillTasksByCategory(category: Category) {
    const tasksFiltered = TestData.tasks.filter(task => task.category === category);
    this.tasksSubject.next(tasksFiltered);
  }
}
