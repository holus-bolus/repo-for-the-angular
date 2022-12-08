import { Component } from '@angular/core';
import { IProduct } from './models/product';
import { products as data } from './data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-app';

  products: IProduct[] = data;
}
