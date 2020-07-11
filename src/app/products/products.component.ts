import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public loading: boolean = false

  constructor(public dataService: DataService) {

  }

  getTextPre(title) {
    return title.replace(this.dataService.searchString, `<strong>${this.dataService.searchString}</strong>`)
  }
  ngOnInit(): void {
    this.dataService.fetchProducts().pipe(delay(300)).subscribe(row => {
      this.loading = true
    })
  }

}
