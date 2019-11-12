import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../menu-item/menu-item.model';
import { CartItem } from './cart.item.model';
import { ShoppingCartService } from './shopping-cart-service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }
  
  
  ngOnInit() {
    
  }  
  
  items(): any[]{
    return this.shoppingCartService.items;
  }
  
  
  clear(){
    this.shoppingCartService.clear()
  }
  
  removeItem(item: any){
    this.shoppingCartService.removeItem(item)
  }

  addItem(item: any){
    console.log(item)
    this.shoppingCartService.addItem(item)
  }

  total(): number {
    return this.shoppingCartService.total() 
  }

  

}
