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

  subCategoryArray:any

  public obj =
  {​​​
    fullName : "lokesh varma",
    line1 : "H.No 53",
    line2 : "kphb phase 2",
    landmark : "temple",
    city : "Hyd",
    district : "ranga",
    state : "AP",
    country : "India",
    pincode : 500090,
    mobile : "9908193918",
    addressType : 1,
    addressDefault : 0
}​​​

  sub_category:any = [
   ["mens","womens","kids"],
   ["mobiles","laptops","home appliances"],
   ["kitchen","home furnishings"]
  ]

  form1:boolean = true

  form2:boolean = false

  form3:boolean = false

  constructor(private PS:ProductsService , private fb:FormBuilder) {
    this.productForm = this.fb.group(
      {
        userId : ['',[Validators.required,Validators.minLength(16)]],
        title: ['',[Validators.required]],
        metaTitle: ['',[Validators.required]],
        price: ['',[Validators.required]],
        discount: ['',[Validators.required]],
        summary: ['',[Validators.required]],
        quantity: ['',[Validators.required]]
      }

    )
   }


   getSubs(ele:any){
    this.subCategoryArray = this.sub_category[ele.target.value]
    console.log(this.subCategoryArray);
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
    // this.PS.testOrderApi().subscribe(res=>console.log(res))
    this.subCategoryArray = this.sub_category[0]
    this.getProductData()
  }
  submit(){
    // this.productForm.value.image = this.imageArray[0]
    this.PS.addProduct(this.productForm.value).subscribe((res:any)=>{
      console.log(res);
      this.getProductData()
    })
  }

  imageArray:string[]=[]

  imageUrl:string = ""

  getImage(e:any){
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

  changeForm(){
    this.form1 = false;
    this.form2 = true
  }

}
