import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-post',
  templateUrl: './product-post.component.html',
  styleUrls: ['./product-post.component.css']
})
export class ProductPostComponent implements OnInit {
  submitted:boolean = false;
  productForm: FormGroup;
  subCategoryArray: any
  products: any;
  error:any = ""
  
  categories : any = ["Apparels","Electronics","Home and Kitchen"]
  
  sub_category: any = 
    {"Apparels": ["Men's wear", "Women's wear", "Kids wear"],
    "Electronics": ["Mobiles", "Laptops", "Home appliances"],
    "Home and Kitchen": ["Kitchen items", "Home furnishings"]
  }

  toSentCategory : string = "Apparels"
  toSentSub : string = "Men's wear"

  getSubs(ele: any) {
    this.subCategoryArray = this.sub_category[ele.target.value]
    console.log(this.subCategoryArray);
  }


  constructor(private PS: ProductsService, private fb: FormBuilder, private toastr: ToastrService) {
    this.productForm = this.fb.group(
      {
        userId: ['', [Validators.required, Validators.minLength(16)]],
        title: ['', [Validators.required]],
        metaTitle: ['', [Validators.required]],
        price: ['', [Validators.required]],
        discount: ['', [Validators.required]],
        summary: ['', [Validators.required]],
        quantity: ['', [Validators.required]],
        category: [this.toSentCategory],
        subCategory: [this.toSentSub],
        // imgUrl : ["",[Validators.required]]
      }
    )
  }

  changeCategory(event:any) {
    this.toSentCategory = event.target.value
    this.subCategoryArray = this.sub_category[this.toSentCategory]
  }

  changeSubCategory(event:any) {
    this.toSentSub = event.target.value
  }

  get productFormControl() {
    return this.productForm.controls;
  }

  ngOnInit(): void {
    this.subCategoryArray = this.sub_category.Apparels
  }

  submit(val:any,imgUrl:any) {
    let img = {
      imgUrl: imgUrl
    }
    console.log(val,img);
    this.submitted=true;
    if(this.productForm.invalid) {
      this.error="Must Fill the All";
      this.toastr.error("Products con't Post.", "Error")
    }
    else
    this.PS.addProduct(val).subscribe(
      (res) => {
        console.log(res);
        this.addImageToProduct(res.id,img)
        this.productForm.reset();
        this.toastr.success("Products are saved successfully.", "Success")
      },
      (error) => {
        console.log(error);
        this.productForm.reset();
        this.toastr.error("Products con't Post.", error)
      }
    )
  }

  addImageToProduct(id:any,img:any) {
    console.log("hello......Did you came to add image");
    this.PS.addImageByProductId(id,img).subscribe(res=>{
      console.log(res);
    },
    (err)=>{
      console.log(err);
    })
  }

}
