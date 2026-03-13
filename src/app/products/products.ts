import { Component } from '@angular/core';
import { Apicourse } from '../apicourse';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: any[] = [];

  constructor(private apicourse: Apicourse, private cdr: ChangeDetectorRef) {}
  ngOnInit() {
    this.apicourse.getproducts().subscribe((data: any) => {
      this.products = data;
      this.cdr.detectChanges();
    });

  }
 }

