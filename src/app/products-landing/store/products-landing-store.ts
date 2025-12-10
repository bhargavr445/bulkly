import { computed, inject } from "@angular/core";
import { tapResponse } from "@ngrx/operators";
import { patchState, signalStore, withComputed, withMethods, withProps, withState } from "@ngrx/signals";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { pipe, switchMap } from "rxjs";
import { pList } from "../../../data";
import { ProductsService } from "../../commons/services/products-service";
import { ProductI } from "../../interfaces/productI";

export const ProductsLandingStore = signalStore(

  { providedIn: 'root' },

  withState<ProductslandingI>({
    _productsList: pList,
    _productsListError: null,
  }),

  withProps(() => ({
    _productsService: inject(ProductsService)
  })),

  withMethods((store) => ({

    // API call to fetch all live products
    fetchAllLiveProducts: rxMethod<void>(
      pipe(
        switchMap(() => store._productsService.fetchLiveProducrs().pipe(
          tapResponse({
            next: (response: ProductI[]) => {
              patchState(store, (state: ProductslandingI) => ({ ...state, _productsList: response, _productsListError: null }))
            },
            error: (error) => {
              patchState(store, (state: ProductslandingI) => ({ ...state, _productsListError: error, _productsList: pList }))
            }
          })
        )),
      )
    ),

    fetchProductById: rxMethod<number>(
      pipe(
        switchMap((productId) => {
          console.log(productId);
          return store._productsService.fetchLiveProducrs().pipe(
            tapResponse({
              next: (response) => { console.log(response) },
              error: (error) => { console.log(error) },
            })
          )
        })
      )
    )
  })),

  withComputed((state) => ({
    productsListC: computed(() => state._productsList()),
    productsListErrorC: computed(() => state._productsListError())
  }))
);

export interface ProductslandingI {
  _productsList: ProductI[];
  _productsListError: any;
}

