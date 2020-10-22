import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BillboardService {
  billboards = [
    {
      id: 1,
      name: 'Roof Deck',
      station: 'North Edsa Station',
      vicinity: `Farmer's Market, Alimall, Araneta Colliseum, Gateway Mall`,
      info: 'Positioned on highly visible, heavy traffic locations such as expressways and major road ways',
      address: 'North avenue corner EDSA, Baranggay Bagong Pag-asa, Quezon City',
      billboardImage: 'https://d1hg6wdwbisxfa.cloudfront.net/wp-content/uploads/2019/12/25163128/green-billboard-3.jpeg',
      mapImage: 'https://www.xda-developers.com/files/2019/06/google-maps-india.jpg',
      type: 'digital',
      size: "50ft x 30ft",
      bound: 'Southbound'
    },
    {
      id: 2,
      name: 'Roof Deck',
      station: 'North Edsa Station',
      vicinity: `Farmer's Market, Alimall, Araneta Colliseum, Gateway Mall`,
      info: 'Positioned on highly visible, heavy traffic locations such as expressways and major road ways',
      address: 'North avenue corner EDSA, Baranggay Bagong Pag-asa, Quezon City',
      billboardImage: 'https://d1hg6wdwbisxfa.cloudfront.net/wp-content/uploads/2019/12/25163128/green-billboard-3.jpeg',
      mapImage: 'https://www.xda-developers.com/files/2019/06/google-maps-india.jpg',
      type: 'digital',
      size: "50ft x 30ft",
      bound: 'Southbound'
    },
    {
      id: 3,
      name: 'Roof Deck',
      station: 'North Edsa Station',
      vicinity: `Farmer's Market, Alimall, Araneta Colliseum, Gateway Mall`,
      info: 'Positioned on highly visible, heavy traffic locations such as expressways and major road ways',
      address: 'North avenue corner EDSA, Baranggay Bagong Pag-asa, Quezon City',
      billboardImage: 'https://d1hg6wdwbisxfa.cloudfront.net/wp-content/uploads/2019/12/25163128/green-billboard-3.jpeg',
      mapImage: 'https://www.xda-developers.com/files/2019/06/google-maps-india.jpg',
      type: 'digital',
      size: "50ft x 30ft",
      bound: 'Southbound'
    },
    {
      id: 4,
      name: 'Roof Deck',
      station: 'North Edsa Station',
      vicinity: `Farmer's Market, Alimall, Araneta Colliseum, Gateway Mall`,
      info: 'Positioned on highly visible, heavy traffic locations such as expressways and major road ways',
      address: 'North avenue corner EDSA, Baranggay Bagong Pag-asa, Quezon City',
      billboardImage: 'https://d1hg6wdwbisxfa.cloudfront.net/wp-content/uploads/2019/12/25163128/green-billboard-3.jpeg',
      mapImage: 'https://www.xda-developers.com/files/2019/06/google-maps-india.jpg',
      type: 'digital',
      size: "50ft x 30ft",
      bound: 'Southbound'
    },
    {
      id: 5,
      name: 'Roof Deck',
      station: 'North Edsa Station',
      vicinity: `Farmer's Market, Alimall, Araneta Colliseum, Gateway Mall`,
      info: 'Positioned on highly visible, heavy traffic locations such as expressways and major road ways',
      address: 'North avenue corner EDSA, Baranggay Bagong Pag-asa, Quezon City',
      billboardImage: 'https://d1hg6wdwbisxfa.cloudfront.net/wp-content/uploads/2019/12/25163128/green-billboard-3.jpeg',
      mapImage: 'https://www.xda-developers.com/files/2019/06/google-maps-india.jpg',
      type: 'digital',
      size: "50ft x 30ft",
      bound: 'Southbound'
    },
    {
      id: 6,
      name: 'Roof Deck',
      station: 'North Edsa Station',
      vicinity: `Farmer's Market, Alimall, Araneta Colliseum, Gateway Mall`,
      info: 'Positioned on highly visible, heavy traffic locations such as expressways and major road ways',
      address: 'North avenue corner EDSA, Baranggay Bagong Pag-asa, Quezon City',
      billboardImage: 'https://d1hg6wdwbisxfa.cloudfront.net/wp-content/uploads/2019/12/25163128/green-billboard-3.jpeg',
      mapImage: 'https://www.xda-developers.com/files/2019/06/google-maps-india.jpg',
      type: 'traditional',
      size: "50ft x 30ft",
      bound: 'Southbound'
    },
    {
      id: 7,
      name: 'Roof Deck',
      station: 'North Edsa Station',
      vicinity: `Farmer's Market, Alimall, Araneta Colliseum, Gateway Mall`,
      info: 'Positioned on highly visible, heavy traffic locations such as expressways and major road ways',
      address: 'North avenue corner EDSA, Baranggay Bagong Pag-asa, Quezon City',
      billboardImage: 'https://d1hg6wdwbisxfa.cloudfront.net/wp-content/uploads/2019/12/25163128/green-billboard-3.jpeg',
      mapImage: 'https://www.xda-developers.com/files/2019/06/google-maps-india.jpg',
      type: 'traditional',
      size: "50ft x 30ft",
      bound: 'Southbound'
    },
    {
      id: 8,
      name: 'Roof Deck',
      station: 'North Edsa Station',
      vicinity: `Farmer's Market, Alimall, Araneta Colliseum, Gateway Mall`,
      info: 'Positioned on highly visible, heavy traffic locations such as expressways and major road ways',
      address: 'North avenue corner EDSA, Baranggay Bagong Pag-asa, Quezon City',
      billboardImage: 'https://d1hg6wdwbisxfa.cloudfront.net/wp-content/uploads/2019/12/25163128/green-billboard-3.jpeg',
      mapImage: 'https://www.xda-developers.com/files/2019/06/google-maps-india.jpg',
      type: 'traditional',
      size: "50ft x 30ft",
      bound: 'Southbound'
    },
    {
      id: 9,
      name: 'Roof Deck',
      station: 'North Edsa Station',
      vicinity: `Farmer's Market, Alimall, Araneta Colliseum, Gateway Mall`,
      info: 'Positioned on highly visible, heavy traffic locations such as expressways and major road ways',
      address: 'North avenue corner EDSA, Baranggay Bagong Pag-asa, Quezon City',
      billboardImage: 'https://d1hg6wdwbisxfa.cloudfront.net/wp-content/uploads/2019/12/25163128/green-billboard-3.jpeg',
      mapImage: 'https://www.xda-developers.com/files/2019/06/google-maps-india.jpg',
      type: '3x7',
      size: "50ft x 30ft",
      bound: 'Southbound'
    },
    {
      id: 10,
      name: 'Roof Deck',
      station: 'North Edsa Station',
      vicinity: `Farmer's Market, Alimall, Araneta Colliseum, Gateway Mall`,
      info: 'Positioned on highly visible, heavy traffic locations such as expressways and major road ways',
      address: 'North avenue corner EDSA, Baranggay Bagong Pag-asa, Quezon City',
      billboardImage: 'https://d1hg6wdwbisxfa.cloudfront.net/wp-content/uploads/2019/12/25163128/green-billboard-3.jpeg',
      mapImage: 'https://www.xda-developers.com/files/2019/06/google-maps-india.jpg',
      type: '3x7',
      size: "50ft x 30ft",
      bound: 'Southbound'
    },
    {
      id: 11,
      name: 'Roof Deck',
      station: 'North Edsa Station',
      vicinity: `Farmer's Market, Alimall, Araneta Colliseum, Gateway Mall`,
      info: 'Positioned on highly visible, heavy traffic locations such as expressways and major road ways',
      address: 'North avenue corner EDSA, Baranggay Bagong Pag-asa, Quezon City',
      billboardImage: 'https://d1hg6wdwbisxfa.cloudfront.net/wp-content/uploads/2019/12/25163128/green-billboard-3.jpeg',
      mapImage: 'https://www.xda-developers.com/files/2019/06/google-maps-india.jpg',
      type: '2x5',
      size: "50ft x 30ft",
      bound: 'Southbound'
    },
  ];
  types = [];
  constructor() { }

  getAllBillBoards() {
    return new Observable<any>(o => o.next(this.billboards));
  }

  filterBillboards(types: string[]) {
    this.types = types;
    const filteredBillboards = this.billboards.filter(billboard => this.types.includes(billboard.type));
    return new Observable<any>(o => o.next(filteredBillboards));
  }

  findBillboard(id) {
    return new Observable<any>(o => o.next(this.billboards))
      .pipe(
        map(billboards => [billboards.find(billboard => billboard.id == id)])
      );
  }
}
