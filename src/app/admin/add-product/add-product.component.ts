import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm:FormGroup

  constructor(private fb:FormBuilder , private PS:ProductsService) {
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

  ngOnInit(): void {
  }

  submit(){
    this.productForm.value.image = this.imageArray[0]
    this.PS.addProduct(this.productForm.value).subscribe(res=>{
      console.log(res);
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
