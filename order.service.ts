import { Injectable } from '@angular/core';
import { Order } from './order.interface'; 

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [];

  constructor() { }

  placeOrder(order: Order) {
    this.orders.push(order);
    
  }

  getRecentOrder(): Order | undefined {
    return this.orders.length > 0 ? this.orders[this.orders.length - 1] : undefined;
  }
}
