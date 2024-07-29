import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  countries: Array<string> = ['Ind', 'Pak', 'Aus', 'USA'];

  products = [
    { id: 1, name: 'Rick Grimes', gender: 'M', age: 40, series: 'TWD' },
    { id: 2, name: 'Michone', gender: 'F', age: 38, series: 'TWD' },
    { id: 3, name: 'Rhenerya', gender: 'F', age: 35, series: 'HOD' },
    { id: 4, name: 'Deomon', gender: 'M', age: 38, series: 'HOD' },
    { id: 5, name: 'Gohan', gender: 'M', age: 30, series: 'DBZ' },
  ];

  lists = [
    { id: 1, category: 'anime', type: 'entertainment', name: 'Deomen Slayer'},
    { id: 2, category: 'anime', type: 'entertainment', name: 'Naruto' },
    { id: 3, category: 'anime', type: 'knowledge', name: 'Death Note' },
    { id: 4, category: 'anime', type: 'entertainment', name: 'One Piece' },
    { id: 5, category: 'Books', type: 'knowledge', name: 'Rich Dad Poor Dad' },
    { id: 6, category: 'Books', type: 'knowledge', name: 'Rich Dad Poor Dad' },
    { id: 7, category: 'Books', type: 'entertainment', name: 'Harry Potter' },
    { id: 8, category: 'Books', type: 'knowledge', name: 'Bhagavadgeetha' },
    { id: 9, category: 'Movies', type: 'entertainment', name: 'RRR' },
    { id: 10, category: 'Movies', type: 'knowledge', name: 'Interstellar' },
    { id: 11, category: 'Movies', type: 'entertainment', name: 'Into The World' }
  ]
}
