import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'wishlist';

  items: WishItem[] = [];

  newWishText: string = '';

  listFilter: string = '0';

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }

  filterChanged(value: any) {
    console.log(value);
  }

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
