import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductI } from '../../interfaces/productI';
import { map, Observable } from 'rxjs';
import { ApiUrl } from '../api-constants';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  #http = inject(HttpClient);

  fetchLiveProducrs(): Observable<ProductI[]> {
    return this.#http.get<ProductI[]>(ApiUrl.allProductsUrl);
  }
}
