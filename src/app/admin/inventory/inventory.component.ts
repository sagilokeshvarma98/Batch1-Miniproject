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

  subCategoryArray: any
  products: any
  searchTerm: any = ''
  imageArray: string[] = []
  imageUrl: string = ""


  public obj =
    {
      userId: "AGTHYUCDGT1235HY",
      title: "MEN Shirt Regular wear",
      metaTitle: "Stylish shirt , party wear",
      summary: "Best shirt for party wear",
      price: 10000,
      discount: 500,
      quantity: 20,
    }
  sub_category: any = [
    ["mens", "womens", "kids"],
    ["mobiles", "laptops", "home appliances"],
    ["kitchen", "home furnishings"]
  ]
  form1: boolean = true
  form2: boolean = false
  form3: boolean = false

  

  constructor(private PS: ProductsService, private dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ProductPostComponent);
    dialogRef.afterClosed().subscribe(
      (res => {
        console.log(`CouponPost : ${res}`)
      })
    )
  }

  getSubs(ele: any) {
    this.subCategoryArray = this.sub_category[ele.target.value]
    console.log(this.subCategoryArray);
  }



  getProductData() {
    this.PS.productsData().subscribe(res => this.products = res)
  }

  ngOnInit(): void {
    this.PS.testOrderApi().subscribe(res => console.log(res))
    this.subCategoryArray = this.sub_category[0]
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

  changeForm() {
    this.form1 = false;
    this.form2 = true
  }

}
