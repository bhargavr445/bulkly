import { Component, input, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bulkly-product',
  imports: [],
  templateUrl: './product.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Product {

  router = inject(Router);

  constructor() {
    this.testFun({name: 'Bh', id: 20, email: 'bh@gmail'}, [10, 20, 30, 60, 90])
  }

  // image = input.required<string>();
  // header = input.required<string>();
  // subHeader = input.required<string>();
  // totalQuantity = input.required<string>();
  // noOfOrdersPlaced = input.required<string>();
  // daysLeft = input.required<number>();
  // fundecPercent = input.required<number>();
  // originalPrice = input.required<number>();
  // discountPrice = input.required<number>();
  percent = input.required<number>();


  navigateToProductDetails(id = 10): void {
    this.router.navigate([`product-details/${id}`]);
  }

  testFun(stu: any, ranks: any[]) {
    // const name = stu.name;
    // const id = stu.id;

    // const {name, id} = stu;
    const {name: myName, id} = stu;

    const [a,b] = ranks;



  }

}
