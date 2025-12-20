import { computed, inject, Signal } from "@angular/core";
import { tapResponse } from "@ngrx/operators";
import { patchState, signalStore, withComputed, withMethods, withProps, withState } from "@ngrx/signals";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { filter, map, Observable, pipe, switchMap, tap } from "rxjs";
import { ProductsService } from "../../commons/services/products-service";
import { ProductI } from "../../interfaces/productI";
import { isAfter } from "date-fns";

export const ProductsLandingStore = signalStore(

  withState<ProductslandingI>({
    _liveProductsList: [],
    _comingSoonProductsList: [],
    _productsListApiLoading: false,
    _productsListError: null,
  }),

  withProps(() => ({
    _productsService: inject(ProductsService)
  })),

  withMethods((store) => ({

    // API call to fetch all live products
    fetchAllLiveProducts: rxMethod<void>(
      pipe(
        filter(() => store._liveProductsList().length < 1),
        tap(() => patchState(store, (state) => ({ ...state, _productsListApiLoading: true }))),
        switchMap(() => store._productsService.fetchLiveProducrs().pipe(
          /* logic to extract liveProducts and coming-soon products */
          map((response: ProductI[]) => {
            const liveProductsList = [];
            const comingSoonProductsList = [];
            response.forEach((product: ProductI) => isAfter(product.productLiveTime, new Date()) ? comingSoonProductsList.push(product) : liveProductsList.push(product));
            return { liveProductsList, comingSoonProductsList };
          }),
          tapResponse({
            next: (response: { liveProductsList: ProductI[], comingSoonProductsList: ProductI[] }) => 
              patchState(store, (state: ProductslandingI) => ({ ...state, _liveProductsList: response.liveProductsList, _comingSoonProductsList: response.comingSoonProductsList, _productsListError: null })),
            error: (error) => 
              patchState(store, (state: ProductslandingI) => ({ ...state, _productsListError: error, _comingSoonProductsList: [], _liveProductsList: [] })),
            finalize: () => patchState(store, (state: ProductslandingI) => ({ ...state, _productsListApiLoading: false }))
          })
        )),
      )
    ),

    fetchProductById: rxMethod<number | Signal<number> | Observable<number>>(
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
    liveProductsListC: computed(() => state._liveProductsList()),
    comingSoonProductsListC: computed(() => state._comingSoonProductsList()),
    productsListErrorC: computed(() => state._productsListError()),
    productsListApiLoading: computed(() => state._productsListApiLoading())
  }))
);

export interface ProductslandingI {
  _liveProductsList: ProductI[];
  _comingSoonProductsList: ProductI[];
  _productsListApiLoading: boolean;
  _productsListError: any;
}

