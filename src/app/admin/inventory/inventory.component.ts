import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import * as $ from 'jquery'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  productForm:FormGroup

  constructor(private PS:ProductsService , private fb:FormBuilder) {
    this.productForm = this.fb.group(
      {
        id : ['',[Validators.required]],
        title: ['',[Validators.required]],
        price: ['',[Validators.required]],
        category: ['',[Validators.required]],
        quantity: ['',[Validators.required]],
        description: ['',[Validators.required]],
        image: ['']
      }
    )
   }

   get productFormControl() {
    return this.productForm.controls;
  }

  products:any

  searchTerm:any = ''

  getProductData(){ 
    this.PS.productsData().subscribe(res=>this.products=res)
  }

  ngOnInit(): void {
    this.getProductData()
  }

  
  submit(){
    this.productForm.value.image = this.imageArray[0]
    this.PS.addProduct(this.productForm.value).subscribe((res:any)=>{
      console.log(res,res.length);
      this.getProductData()
    })
  }

  imageArray:string[]=[]

  getImage(e:any){
   if(e.target.files){
     var reader = new FileReader();
     reader.readAsDataURL(e.target.files[0])
    reader.onload = (event:any)=>{
      this.imageArray.push(event.target.result)
    }
   }
  }

}
