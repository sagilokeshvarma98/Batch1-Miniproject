import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private PS:ProductsService) { }

  products:any

  searchTerm:any = ''

  ngOnInit(): void {
    this.PS.productsData().subscribe(res=>this.products=res)
  }

}
