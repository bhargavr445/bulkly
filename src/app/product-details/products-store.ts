/**  import { signalStore } from '@ngrx/signals';

export const ProductsStore = signalStore(
  
  withState
  
  withMethods
  
  withComputed
  
  withProps
  
); */

// import { computed } from '@angular/core';
// import { 
//     patchState, withMethods, 
//     signalStore, withState, 
//     withComputed
// } from '@ngrx/signals';

// export const ProductsStore = signalStore(


//     withState({

//         _productList: [],

//         _sortOrder: 'asc'

//     }),

//     withComputed((store) => ({
//         computedProductList: computed(() => store._productList()),
//         computedSortOrder: computed(() => store._sortOrder())
//     })),

// );

import { computed, inject } from '@angular/core';
import {
    patchState, withState, withMethods,
    signalStore, withProps, withComputed } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { ProductsService } from '../commons/services/products-service';

export const ProductsStore = signalStore(

    { providedIn: 'root' },

    withState({
        _productList: [],
        _sortOrder: 'asc'
    }),

    withComputed((store) => ({
        computedProductList: computed(() => store._productList()),
        computedSortOrder: computed(() => store._sortOrder())
    })),

    withProps((store) => ({
        _productsService: inject(ProductsService)
    })),

    withMethods((store) => ({

        updateOrder(sortType: string) {
            patchState(store, (state) => ({ ...state, _sortOrder: sortType }));
        },

        fetchAllProducts: rxMethod<void>(
            pipe(
                switchMap(() => store._productsService.fetchLiveProducrs().pipe(
                    tap((productsResponse: any[]) =>
                        patchState(store, (state) =>
                            ({ ...state, _productList: productsResponse })))
                ))
            )
        )
    }))

);

    
