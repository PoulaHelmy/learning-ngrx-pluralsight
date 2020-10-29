import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export const toggleProductCode = createAction('[Product] Toggle Product Code');

export const setCurrentProduct = createAction(
  '[Product] Set Current Product',
  props<{ currentProductId: number }>()
);

export const clearCurrentProduct = createAction(
  '[Product] Clear Current Product'
);

export const InitializeCurrentProduct = createAction(
  '[Product] Initialize Product Code'
);

export const loadProducts = createAction('[Product] Load');

export const loadProductsSuccess = createAction(
  '[Product] Load Success',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
  '[Product] Load Fail',
  props<{ error: string }>()
);


export const updateProduct = createAction('[Product] Update');

export const updateProductSuccess = createAction(
  '[Product] Update Success',
  props<{ products: Product[] }>()
);

export const updateProductFailure = createAction(
  '[Product] Update Fail',
  props<{ error: string }>()
);
