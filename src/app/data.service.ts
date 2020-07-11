import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const dataParameter = {
  productsUrl: "https://jsonplaceholder.typicode.com/photos"
}

export interface product {
  "albumId": string,
  "id": string,
  "title": string,
  "url": string,
  "thumbnailUrl": string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public products: product[] = []
  public bascet: product[] = []
  public searchString: string = ""
  public currentPageProducts: number = 1

  addToBascet(productBascet) {
    if (!this.bascet.some(row => row.id.toString() === productBascet.id.toString())) {
      this.bascet.push(productBascet)
    }
    console.log('ok')
  }

  delToBascet(productBascet) {
    return this.bascet.filter(row => row.id.toString() !== productBascet.id.toString())
  }

  fetchProducts(): Observable<product[]> {
    return this.http.get<product[]>(dataParameter.productsUrl)
      .pipe(tap(row => {
        this.products = row
      }));
  }

  constructor(private http: HttpClient) { }
}
