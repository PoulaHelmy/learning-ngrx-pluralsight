/* NgRx */
import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { Product } from '../product';
import * as AppState from '../../state/app.state';
import * as ProductActions from './product.actions';
export interface State extends AppState.State {
  products: ProductState;
}
export interface ProductState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[];
  error: string;
}
const initalState: ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  error: '',
};
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
export const productReducer = createReducer<ProductState>(
  //inital state
  initalState,
  on(
    ProductActions.toggleProductCode,
    (state): ProductState => {
      return {
        ...state,
        showProductCode: !state.showProductCode,
      };
    }
  ),
  on(
    ProductActions.setCurrentProduct,
    (state, action): ProductState => {
      return {
        ...state,
        currentProductId: action.currentProductId,
      };
    }
  ),
  on(
    ProductActions.clearCurrentProduct,
    (state): ProductState => {
      return {
        ...state,
        currentProductId: null,
      };
    }
  ),
  on(
    ProductActions.InitializeCurrentProduct,
    (state): ProductState => {
      return {
        ...state,
        currentProductId: 0,
      };
    }
  ),
  on(
    ProductActions.loadProductsSuccess,
    (state, action): ProductState => {
      return {
        ...state,
        products: action.products,
        error: '',
      };
    }
  ),
  on(
    ProductActions.loadProductsFailure,
    (state, action): ProductState => {
      return {
        ...state,
        products: [],
        error: action.error,
      };
    }
  )
);
