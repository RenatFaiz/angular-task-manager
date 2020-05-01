import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

export class TestData {
  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Семья'},
    {id: 3, title: 'Учёба'},
    {id: 4, title: 'Отдых'},
    {id: 5, title: 'Спорт'},
    {id: 6, title: 'Еда'},
    {id: 7, title: 'Финансы'},
    {id: 8, title: 'Устройства'},
    {id: 9, title: 'Здоровье'},
    {id: 10, title: 'Авто'},
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: '#e5e5e5'},
    {id: 2, title: 'Средний', color: '#85D1B2'},
    {id: 3, title: 'Высокий', color: '#F1828D'},
    {id: 4, title: 'Очень высокий!', color: '#F1128D'}
  ];

  // не забывать - индексация приоритетов и категорий начинется с нуля
  static tasks: Task[] = [
    {
      id: 1,
      title: 'Залить полный бак бензина',
      completed: false,
      priority: TestData.priorities[2],
      category: TestData.categories[9],
      date: new Date('2020-05-10')
    },
    {
      id: 2,
      title: 'Купить 1 кг огурцов',
      completed: false,
      priority: TestData.priorities[0],
      category: TestData.categories[5],
      date: new Date('2020-05-02')
    },
    {
      id: 3,
      title: 'Сделать разминку на улице',
      completed: false,
      priority: TestData.priorities[1],
      category: TestData.categories[4],
    },
    {
      id: 4,
      title: 'Позвонить маме',
      completed: true,
      category: TestData.categories[1],
      date: new Date('2020-04-29')
    },
    {
      id: 5,
      title: 'Подать документы на конкурс портфолио в КНИТУ-КАИ',
      completed: false,
      priority: TestData.priorities[2],
      category: TestData.categories[2],
      date: new Date('2020-06-01')
    },
  ];
}
