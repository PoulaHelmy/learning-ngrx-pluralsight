import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { Store } from '@ngrx/store';
import {
  getAllProducts,
  getCurrentProduct,
  getError,
  getShowProductCode,
} from '../state/products.reducer';
import { State } from '../state/products.reducer';
import * as ProductActions from '../state/product.actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';
  errorMessage$: Observable<string>;
  products$: Observable<Product[]>;
  selectedProduct$: Observable<Product>;
  displayCode$: Observable<boolean>;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.products$ = this.store.select(getAllProducts);
    this.errorMessage$ = this.store.select(getError);

    this.store.dispatch(ProductActions.loadProducts());
    this.selectedProduct$ = this.store.select(getCurrentProduct);
    this.displayCode$ = this.store.select(getShowProductCode);
  }

  checkChanged(): void {
    // this.displayCode = !this.displayCode;
    this.store.dispatch(ProductActions.toggleProductCode());
  }

  newProduct(): void {
    // this.productService.changeSelectedProduct(this.productService.newProduct());
    this.store.dispatch(ProductActions.InitializeCurrentProduct());
  }

  productSelected(product: Product): void {
    //this.productService.changeSelectedProduct(product);
    this.store.dispatch(
      ProductActions.setCurrentProduct({ currentProductId: product.id })
    );
  }
}
