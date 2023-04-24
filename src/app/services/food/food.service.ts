import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  static getFoodbyId(arg0: any): Food {
    throw new Error('Method not implemented.');
  }
  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return this.getAll().filter(food=> 
      food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()
      ));
  }
  getAllTags():Tag[]{
    return [
      {name: 'Hamma', count: 18},
      {name: 'Yegulik', count: 15},
      {name: 'Ichimlik', count: 3},
      {name: 'Tez', count: 8},
      {name: 'Sekin', count: 10},
      {name: 'Milliy', count: 6},
      {name: 'Xorijiy', count: 12},
      {name: 'Hamyonbop', count: 9},
    ];
  }

  getAllFoodsByTag(tag:string):Food[] {
    return tag =="Hamma"? 
    this.getAll() : 
    this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll():Food[]{
    return [
      {
        id: 1,
        name: 'Napalyon',
        cookTime: '30-40',
        price: 10,
        favorite: false,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['Yegulik', 'Sekin', 'Xorijiy'],
      },
      {
        id: 2,
        name: 'Shokolodli',
        price: 1,
        cookTime: '5-10',
        favorite: true,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['Yegulik', 'Tez', 'Xorijiy', 'Hamyonbop'],
      },
      {
        id: 3,
        name: 'Balish',
        price: 0.8,
        cookTime: '5-10',
        favorite: false,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['Yegulik', 'Tez', 'Milliy', 'Hamyonbop'],
      },
      {
        id: 4,
        name: 'Olmali',
        price: 6,
        cookTime: '15-20',
        favorite: true,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['Yegulik', 'Sekin', 'Xorijiy'],
      },
      {
        id: 5,
        name: 'Keks',
        price: 4,
        cookTime: '20-30',
        favorite: false,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['Yegulik', 'Sekin', 'Xorijiy'],
      },
      {
        id: 6,
        name: 'Malinali',
        price: 8,
        cookTime: '15-20',
        favorite: false,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['Yegulik', 'Sekin', 'Xorijiy'],
      },
      {
        id: 7,
        name: 'Pishiriq',
        price: 0.6,
        cookTime: '3-4',
        favorite: true,
        imageUrl: '/assets/images/foods/food-7.jpg',
        tags: ['Yegulik', 'Tez', 'Milliy', 'Hamyonbop'],
      },
      {
        id: 8,
        name: 'Somsa',
        price: 1.1,
        cookTime: '15-20',
        favorite: true,
        imageUrl: '/assets/images/foods/food-8.jpg',
        tags: ['Yegulik', 'Sekin', 'Milliy', 'Hamyonbop'],
      },
      {
        id: 9,
        name: 'Paxlava',
        price: 1.5,
        cookTime: '8-10',
        favorite: false,
        imageUrl: '/assets/images/foods/food-9.jpg',
        tags: ['Yegulik', 'Tez', 'Milliy', 'Hamyonbop'],
      },
      {
        id: 10,
        name: 'Chak-Chak',
        price: 1.5,
        cookTime: '3-4',
        favorite: true,
        imageUrl: '/assets/images/foods/food-10.jpg',
        tags: ['Yegulik', 'Tez', 'Milliy', 'Hamyonbop'],
      },
      {
        id: 11,
        name: 'Shokoladli Tort',
        price: 25,
        cookTime: '45-55',
        favorite: true,
        imageUrl: '/assets/images/foods/food-11.jpg',
        tags: ['Yegulik', 'Sekin', 'Xorijiy'],
      },
      {
        id: 12,
        name: 'Gulli',
        price: 30,
        cookTime: '65-85',
        favorite: false,
        imageUrl: '/assets/images/foods/food-12.jpg',
        tags: ['Yegulik', 'Sekin', 'Xorijiy'],
      },
      {
        id: 13,
        name: 'Biskvit',
        price: 8,
        cookTime: '30-45',
        favorite: false,
        imageUrl: '/assets/images/foods/food-13.jpg',
        tags: ['Yegulik', 'Sekin', 'Xorijiy'],
      },
      {
        id: 14,
        name: 'Rus',
        price: 7.5,
        cookTime: '15-25',
        favorite: true,
        imageUrl: '/assets/images/foods/food-14.jpg',
        tags: ['Yegulik', 'Sekin', 'Xorijiy'],
      },
      {
        id: 15,
        name: 'Tort',
        price: 28,
        cookTime: '65-85',
        favorite: true,
        imageUrl: '/assets/images/foods/food-15.jpg',
        tags: ['Yegulik', 'Sekin', 'Xorijiy'],
      },
      {
        id: 16,
        name: 'Limonad',
        price: 1.5,
        cookTime: '0',
        favorite: true,
        imageUrl: '/assets/images/foods/food-16.jpg',
        tags: ['Ichimlik', 'Tez', 'Xorijiy', 'Hamyonbop'],
      },
      {
        id: 17,
        name: 'Orik sharbat',
        price: 1.5,
        cookTime: '0',
        favorite: true,
        imageUrl: '/assets/images/foods/food-17.jpg',
        tags: ['Ichimlik', 'Tez', 'Milliy', 'Hamyonbop'],
      },
      {
        id: 18,
        name: 'Anorli',
        price: 1.5,
        cookTime: '0',
        favorite: true,
        imageUrl: '/assets/images/foods/food-18.jpg',
        tags: ['Ichimlik', 'Tez', 'Xorijiy', 'Hamyonbop'],
      },
          ]
  }

}
function toLocaleLowerCase(): number | undefined {
  throw new Error('Xatolik');
}

