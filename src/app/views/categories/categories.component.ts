import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(private dataHandlerService: DataHandlerService) {
  }

  // Метод вызывается после инициализации компонента
  ngOnInit(): void {
    this.categories = this.dataHandlerService.getCategories();
    console.log(this.categories);
  }

  showTasksByCategory(category: Category) {
    return this.dataHandlerService.getTasksByCategory(category);
  }
}

