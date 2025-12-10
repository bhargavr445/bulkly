import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  
  #http = inject(HttpClient);

  fetchLiveProducrs() {
    return this.#http.get('https://bulkbuy-rumt.onrender.com/product/allProducts')
  }
}
