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

  productForm: FormGroup;
  subCategoryArray: any
  products: any;
  

  constructor(private PS: ProductsService, private fb: FormBuilder, private toastr: ToastrService) {
    this.productForm = this.fb.group(
      {
        userId: ['', [Validators.required, Validators.minLength(16)]],
        title: ['', [Validators.required]],
        metaTitle: ['', [Validators.required]],
        price: ['', [Validators.required]],
        discount: ['', [Validators.required]],
        summary: ['', [Validators.required]],
        quantity: ['', [Validators.required]]
      }

    )
  }

  get productFormControl() {
    return this.productForm.controls;
  }
  ngOnInit(): void {
  }
  submit() {
    this.PS.addProduct(this.productForm.value).subscribe(
      () => {
        this.productForm.reset();
        this.toastr.success("Products are saved successfully.", "Success")
      },
      () => {
        this.productForm.reset();
        this.toastr.error("Products con't Post.", "Error")
      }
    )
  }
}
