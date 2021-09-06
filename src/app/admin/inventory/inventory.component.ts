import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductPostComponent } from '../product-post/product-post.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  products: any
  searchTerm: any = ''
  imageArray: string[] = []
  imageUrl: string = ""


  

  constructor(private PS: ProductsService, private dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ProductPostComponent);
    dialogRef.afterClosed().subscribe(
      (res => {
        console.log(`CouponPost : ${res}`)
      })
    )
  }

  


  getProductData() {
    this.PS.productsData().subscribe(res => {
      this.products = res
      console.log(res);
    })
  }

  ngOnInit(): void {
    this.getProductData()
  }

  
  getImage(e: any) {
    this.imageArray.push(e.target.value)
    console.log(this.imageArray);

    //  if(e.target.files){
    //    var reader = new FileReader();
    //    reader.readAsDataURL(e.target.files[0])
    //   reader.onload = (event:any)=>{
    //     this.imageArray.push(event.target.result)
    //   }
    //  }
  }

}
