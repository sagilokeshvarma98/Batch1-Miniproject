# E-Commerce Mini Project

![alt](https://cdn.dribbble.com/users/12601/screenshots/3554804/gif.gif)



>__DESCRIPTION__

  **E-commerce** is an online shopping project.

  Both _USER_ and _ADMIN_ can login from same SignIn page.

    User must enter correct credentails to login, wrong credentials will pop up an error.

  User can view products without logging in but using cart is restricted.

    Error Handling is done to every component

User can register from **SignUp page**.

    Must use unique username, phone number and Email.

    If user reuses any of mentioned above three, error will popup upon BLURING.

    Can login immediately upon Signning UP.

If user forgot password he/she can _reset password_.

    By entering correct phone number reset email will to associated Mail.

After _Login_ user can 

![alt](https://cdn.dribbble.com/users/2234430/screenshots/8587843/media/5a7b6b3be7edd17ae98a25d010277e62.gif)

1. Check his/her **Profile**.

1. **Deactivate** his account.

1. Add products to **Cart**.

1. View his/her Orders (Delete, Track and Reorder).

1. View his/her Addresses (Add, edit and delete).

Functionalities on **_Products_**

1. Search

1. Sort (_A-Z_ , _Z-A_ , _PRICE_ (hign to low and low to high) and _RATING_)

1. Filter based on rating, price and Exclude out of stock.

1. On selecting a product a new product description tab will be opened.

1. User can add products to cart.
    - Products are added to cart if user is logged in and products are available.

![alt](https://cdn.dribbble.com/users/68238/screenshots/5613387/cart.gif    )

User can **modify cart** and checkout from cart.

In Checkout page user will check the product details and can add _COUPONS_ or checkout to payment page.

By entering card details user can place the order.


**ADMIN** can 
- view _user Demographics_.

- _reset user password_.

- view _products details_ and can add them.

- _reactivate user losted account_.

- Add, delete _Coupons_.

- View transactions.

![alt](https://assets.materialup.com/uploads/13958c5d-ed6f-4e63-a103-1f8cbb63f8e3/preview.gif)

- Download transaction b/w selected dates in an xl sheet.


[Live Demo](https://stackblitz.com/github/sagilokeshvarma98/Batch1-Miniproject "View live demo")


>**Technologies Used**

## Angular 12
---

![alt](https://ih0.redbubble.net/image.670583004.2670/mp,840x830,matte,f8f8f8,t-pad,1000x1000,f8f8f8.u1.jpg)


_Angular 12_ is the recent upgrade to Google’s most efficient TypeScript based platform and framework, Angular. The framework Angular is known for creating Single client page applications using TypeScript and HTML.

## HTML
---
![alt](https://th.bing.com/th/id/R.0eaa43efa944bc52b289a98529a349bd?rik=LfZzmpvYABrRag&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgraphicloads%2fcolorful-long-shadow%2f256%2fHtml-tags-icon.png&ehk=%2fcpSsJR5wpA4S6FkRVxwqWBFxBLY7XL4%2fHI9DAFWbAs%3d&risl=&pid=ImgRaw&r=0)

Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages.

## TypeScript
---
![alt](https://pantheon.io/sites/default/files/field/image/TypeScriptImage.jpeg)

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript - typescriptlang.org. JavaScript is a programming language that is developed by EMCA's Technical Committee 39, which is a group of people composed of many different stakeholders.

## CSS
---
![alt](https://gifimage.net/wp-content/uploads/2017/10/css-gif-3.gif)

1. CSS stands for Cascading Style Sheets.

2. CSS describes how HTML elements are to be displayed on screen, paper, or in other media.

3. CSS saves a lot of work. It can control the layout of multiple web pages all at once.

4. External stylesheets are stored in CSS files.

## Bootstrap
---
![alt](https://th.bing.com/th/id/OIP.mNLHMt-PM0iPB52LqWOBAgHaHd?pid=ImgDet&rs=1)

Here’s what that means in plainer terms: Bootstrap is a giant collection of handy, reusable bits of code written in HTML, CSS, and JavaScript. It’s also a frontend development framework that enables developers and designers to quickly build fully responsive websites.

## Node JS
---
![alt](https://cdn.dribbble.com/users/505482/screenshots/1776789/nodejs-dribbble_1.gif)

Node.js uses asynchronous programming! A common task for a web server can be to open a file on the server and return the content to the client. Here is how PHP or ASP handles a file request: Sends the task to the computer's file system. Waits while the file system opens and reads the file. Returns the content to the client.

>**_Teckstack Table_**

| Technologies | Tools | Packages |
| --- | --- | --- |
| TypeScript | Visual studio | angular/animations |
| Angular | GIT HUB | angular/cdk |
| Bootstrap |  | angular/common |
| HTML |  | angular/compiler |
| CSS |  | angular/core |
| Node | | angular/forms |
|  |  | angular/material |
|  |  | angular/localize |
|  |  | angular/platform-browser |
|  | | angular/platform-browser-dynamic |
|  |  | angular/router |



### Project Setup
***

``` node js

npm install

ng serve

```

_Future Developments_
***

**Adding EsLint Rules**