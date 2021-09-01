import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

// import { ProductsService } from 'src/app/services/products.service';
// import { convertToObject } from 'typescript';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private myorder: OrdersService) { }

  id: any;
  myorders: any = [
    {
        "id": 5,
        "userId": 1243,
        "token": null,
        "subTotal": 3897,
        "itemDiscount": 3048,
        "tax": 0,
        "shipping": 0,
        "total": 849,
        "promo": null,
        "discount": 0,
        "grandTotal": null,
        "status": {
            "id": 1,
            "name": "NEW",
            "description": "Order initiated"
        },
        "fullName": "Sagi Lokesh varma",
        "mobile": "9182074913",
        "email": "lokeshvibe@gmail.com",
        "createdAt": "2021-09-01",
        "updatedAt": "2021-09-01",
        "content": null,
        "orderItems": [
            {
                "id": 8,
                "sku": "TSHFMGKZZTWKVMHH",
                "price": 3897,
                "discount": 3048,
                "quantity": 3,
                "createdAt": null,
                "updatedAt": "2021-09-01",
                "content": null,
                "product": {
                    "id": 8,
                    "title": "Striped Men Round Neck Yellow T-Shirt",
                    "metaTitle": "Striped Men Round Neck Yellow, Black T-Shirt",
                    "productDescription": "Designed by the team at Seven Rocks, you're definitely in for a style treat with this 60% cotton, 40% Polyester T-shirt. Striped T-shirt, has a Round neck, Long sleeves.",
                    "productBrand": null,
                    "slug": "seven-rocks-striped-men-round-neck-yellow-t-shirt",
                    "sku": "TSHFMGKZZTWKVMHH",
                    "type": 0,
                    "price": 1299,
                    "discount": 1016,
                    "quantity": 2,
                    "inStock": null,
                    "shop": 52,
                    "createdAt": "2021-07-24T07:28:10.000+00:00",
                    "updatedAt": "2021-09-01T06:44:51.000+00:00",
                    "publishedAt": "2021-07-24T07:28:10.000+00:00",
                    "startsAt": "2021-07-24T07:28:10.000+00:00",
                    "endsAt": "2021-07-24T07:28:10.000+00:00",
                    "content": "Designed by the team at Seven Rocks, you're definitely in for a style treat with this 60% cotton, 40% Polyester T-shirt. Striped T-shirt, has a Round neck, Long sleeves.",
                    "attributes": [
                        {
                            "id": 4,
                            "key": "color",
                            "content": "yellow"
                        },
                        {
                            "id": 5,
                            "key": "size",
                            "content": "L"
                        }
                    ],
                    "imageUrls": [
                        {
                            "id": 59,
                            "imgUrl": "https://rukminim1.flixcart.com/image/800/960/kklhbbk0/t-shirt/n/b/o/l-raw-327-mustard-rawhit-original-imafzwzzwx6yybaq.jpeg?q=50",
                            "size": "416x416",
                            "updateOn": "2021-08-23T15:10:55.000+00:00"
                        },
                        {
                            "id": 60,
                            "imgUrl": "https://rukminim1.flixcart.com/image/800/960/kklhbbk0/t-shirt/l/n/b/l-raw-327-mustard-rawhit-original-imafzwzz6zbzzdrc.jpeg?q=50",
                            "size": "416x416",
                            "updateOn": "2021-08-23T15:11:35.000+00:00"
                        },
                        {
                            "id": 61,
                            "imgUrl": "https://rukminim1.flixcart.com/image/800/960/kklhbbk0/t-shirt/g/q/q/l-raw-327-mustard-rawhit-original-imafzwzzxmebuw8w.jpeg?q=50",
                            "size": "416x416",
                            "updateOn": "2021-08-23T15:12:00.000+00:00"
                        }
                    ],
                    "productReviews": []
                }
            }
        ]
    },
    {
        "id": 6,
        "userId": 1243,
        "token": null,
        "subTotal": 127495,
        "itemDiscount": 10000,
        "tax": 0,
        "shipping": 0,
        "total": 117495,
        "promo": null,
        "discount": 0,
        "grandTotal": null,
        "status": {
            "id": 1,
            "name": "NEW",
            "description": "Order initiated"
        },
        "fullName": "Sagi Lokesh varma",
        "mobile": "9182074913",
        "email": "lokeshvibe@gmail.com",
        "createdAt": "2021-09-01",
        "updatedAt": "2021-09-01",
        "content": null,
        "orderItems": [
            {
                "id": 9,
                "sku": "RFRF3HZZZYTNKSCU",
                "price": 127495,
                "discount": 10000,
                "quantity": 5,
                "createdAt": null,
                "updatedAt": "2021-09-01",
                "content": null,
                "product": {
                    "id": 11,
                    "title": "Whirlpool 240 L Frost Free Triple Door 5 Star Refrigerator  (Magnum Steel, FP 263D PROTTON ROY MAGNUM STEEL(N))",
                    "metaTitle": "Whirlpool 240 L Frost Free Triple Door 5 Star Refrigerator",
                    "productDescription": "Store and chill all your veggies and groceries in a single place by bringing home this 240 L Whirlpool Frost-free Refrigerator. This triple-door refrigerator keeps fruits and veggies fresher and flavorful for longer. Equipped with Whirlpool's Microblock a",
                    "productBrand": null,
                    "slug": "whirlpool-240-l-frost-free-triple-door-5-star-refrigerator",
                    "sku": "RFRF3HZZZYTNKSCU",
                    "type": 2543,
                    "price": 25499,
                    "discount": 2000,
                    "quantity": 94,
                    "inStock": null,
                    "shop": 1,
                    "createdAt": "2021-08-21T12:41:26.000+00:00",
                    "updatedAt": "2021-09-01T06:48:38.000+00:00",
                    "publishedAt": "2021-08-21T12:41:26.000+00:00",
                    "startsAt": "2021-08-21T13:04:34.000+00:00",
                    "endsAt": "2021-08-26T13:04:34.000+00:00",
                    "content": "240 L : Good for families of 3-5 members\r\nNormal Compressor : Standard type of Compressor with Easy Maintenance\r\n5 Star : For Energy savings up to 55%",
                    "attributes": [
                        {
                            "id": 12,
                            "key": "Capacity",
                            "content": "240L"
                        },
                        {
                            "id": 13,
                            "key": "Highlights",
                            "content": "240 L : Good for families of 3-5 members\r\nNormal Compressor : Standard type of Compressor with Easy Maintenance\r\n5 Star : For Energy savings up to 55%\r\nFrost Free : Auto fridge defrost to stop ice-build up"
                        }
                    ],
                    "imageUrls": [
                        {
                            "id": 26,
                            "imgUrl": "https://rukminim1.flixcart.com/image/416/416/jialea80/refrigerator-new/s/c/u/fp-263d-protton-roy-na-whirlpool-original-imaf64hz6u7uxjxb.jpeg?q=70",
                            "size": "416x416",
                            "updateOn": "2021-08-21T13:07:13.000+00:00"
                        },
                        {
                            "id": 27,
                            "imgUrl": "https://rukminim1.flixcart.com/image/416/416/k05ljm80/refrigerator-new/s/c/u/fp-263d-protton-roy-magnum-steel-n-na-whirlpool-original-imafkyhzz89wm8ph.jpeg?q=70",
                            "size": "416x416",
                            "updateOn": "2021-08-21T13:07:46.000+00:00"
                        },
                        {
                            "id": 28,
                            "imgUrl": "https://rukminim1.flixcart.com/image/416/416/k05ljm80/refrigerator-new/s/c/u/fp-263d-protton-roy-magnum-steel-n-na-whirlpool-original-imafkyhycwunnrzs.jpeg?q=70",
                            "size": "416x416",
                            "updateOn": "2021-08-21T13:07:46.000+00:00"
                        }
                    ],
                    "productReviews": [
                        {
                            "id": 14,
                            "title": "Excellent",
                            "rating": 5,
                            "published": "2021-08-21T13:08:52.000+00:00",
                            "createdAt": "2021-08-21T13:08:52.000+00:00",
                            "publishedAt": "2021-08-25T13:08:52.000+00:00",
                            "content": "This fridge is really the best at low prices from United States Brand's - Whirlpool. I believe it's really hard to get a good brand of another brand at this price. Its design and its quality are really stunning and superb"
                        },
                        {
                            "id": 15,
                            "title": "\r\nWaste of money!",
                            "rating": 1,
                            "published": "2021-08-24T13:01:53.000+00:00",
                            "createdAt": "2021-08-21T12:41:26.000+00:00",
                            "publishedAt": "2021-08-21T12:50:18.000+00:00",
                            "content": "Delivered the product on time. But the return policy is so poor. They told to give money because of the difficulties of the old fridge but they didn't give a bill or a recepit they just asked an amount and we were supposed to give that to them."
                        }
                    ]
                }
            }
        ]
    }
];
  confirm: any
  status = "shipped"
  state: boolean = false;
  orderItems:any[]=[]

  cancelorder(id: any) {
    this.confirm = confirm("do you want confirm cancel item")
    if (this.confirm == true) {
      this.status = "canceld"
      if (this.status = "canceld") {
        this.state = true
      }
      this.getorder();
      console.log(id);
    }
    else {
      alert("ok")
    }
  }
  reorder() {
    this.state = false;
    this.status = "reorderd"
  }

  getorder() {
    console.log("hai");
    this.myorder.getmyorders().subscribe(
      (data) => {
        // this.myorders = data
        console.log(data);
        // this.myorders.map((x:any)=>{
        //   this.orderItems.push(x)
        // })
        // console.log(this.orderItems);
        // this.orderItems.map((x:any)=>{
        //   console.log(x);
        // })
      })
    }

  ngOnInit(): void {
    this.myorders.map((x:any)=>{
      x.orderItems.map((y:any)=>{
        y.status = x.status
        this.orderItems.push(y)
      })
    })
    console.log(this.orderItems);
    this.getorder();
  }
}
