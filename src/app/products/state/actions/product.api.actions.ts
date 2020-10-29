import { createAction, props } from '@ngrx/store';
import { Product } from '../../product';

export const loadProductsSuccess = createAction(
  '[Product API] Load Success',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
  '[Product API] Load Fail',
  props<{ error: string }>()
);

export const updateProductSuccess = createAction(
  '[Product API] Update Success',
  props<{ product: Product }>()
);

export const updateProductFailure = createAction(
  '[Product API] Update Fail',
  props<{ error: string }>()
);

export const createProductSuccess = createAction(
  '[Product API] Create Success',
  props<{ product: Product }>()
);

export const createroductFailure = createAction(
  '[Product API] Create Fail',
  props<{ error: string }>()
);

export const deleteProductSuccess = createAction(
  '[Product API] Delete Product Success',
  props<{ productId: number }>()
);

export const deleteProductFailure = createAction(
  '[Product API] Delete Product Fail',
  props<{ error: string }>()
);
