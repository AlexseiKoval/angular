import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service'

export interface product {
  "albumId": string,
  "id": string,
  "title": string,
  "url": string,
  "thumbnailUrl": string
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public item: product
  public currentRate: number = 6;

  
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {

    this.route.paramMap
      .subscribe(params => {
        this.dataService.fetchProducts().subscribe(row => {
          this.item = dataService.products.find(
            row => {
              return row.id.toString() === params.get('id')
            }
          );
        })
      });
  }

  ngOnInit(): void {
  }

}
