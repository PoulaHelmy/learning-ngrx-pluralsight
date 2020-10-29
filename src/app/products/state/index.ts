/* NgRx */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../product';
import * as AppState from '../../state/app.state';

export interface State extends AppState.State {
  products: ProductState;
}
export interface ProductState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[];
  error: string;
}

const getProductFeaturesState = createFeatureSelector<ProductState>('products');
export const getShowProductCode = createSelector(
  getProductFeaturesState,
  (state) => state.showProductCode
);
export const getCurrentProductId = createSelector(
  getProductFeaturesState,
  (state) => state.currentProductId
);
export const getCurrentProduct = createSelector(
  getProductFeaturesState,
  getCurrentProductId,
  (state, currentProductId) => {
    if (currentProductId === 0) {
      return {
        id: 0,
        productName: '',
        productCode: 'New',
        description: '',
        starRating: 0,
      };
    } else {
      return currentProductId
        ? state.products.find((p) => p.id === currentProductId)
        : null;
    }
  }
);
export const getAllProducts = createSelector(
  getProductFeaturesState,
  (state) => state.products
);
export const getError = createSelector(
  getProductFeaturesState,
  (state) => state.error
);
