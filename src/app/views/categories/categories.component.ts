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
  selectedCategory: Category;

  constructor(private dataHandlerService: DataHandlerService) {
  }

  // Метод вызывается после инициализации компонента
  ngOnInit(): void {
    // this.dataHandlerService.fillCategories();
    // console.log(this.categories);
    this.dataHandlerService.categoriesSubject.subscribe(categories => this.categories = categories);
  }

  showTasksByCategory(category: Category) {
    this.selectedCategory = category;
    this.dataHandlerService.fillTasksByCategory(category);
  }
}

