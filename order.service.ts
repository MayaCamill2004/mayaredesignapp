import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: any[] = [];

  addOrder(orderItems: any[]): void {
    this.orders.push(orderItems);
  }

  getOrders(): any[] {
    return this.orders;
  }
}
