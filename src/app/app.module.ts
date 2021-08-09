import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ADMINModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SubpageComponent } from './components/subpage/subpage.component';
import { RouterModule } from '@angular/router';
import { MensSubpageComponent } from './components/mens-subpage/mens-subpage.component';
import { ElectronicsSubpageComponent } from './components/electronics-subpage/electronics-subpage.component';
import { KitchenSubpageComponent } from './components/kitchen-subpage/kitchen-subpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngmaterialModule } from './angmaterial/angmaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './components/carousel/carousel.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { SubnavComponent } from './components/subnav/subnav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginInterceptor } from './Interceptors/login.interceptor';
import { ErrorInterceptor } from './Interceptors/error.interceptor';
import { UserRoutingModule } from './user/user-routing.module';
import { ADMINRoutingModule } from './admin/admin-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { CommentsComponent } from './user/components/comments/comments.component';





@NgModule({
  declarations: [
    AppComponent,
    SubpageComponent,
    HomepageComponent,
    MensSubpageComponent,
    ElectronicsSubpageComponent,
    KitchenSubpageComponent,
    NavbarComponent,
    CarouselComponent,
    SubnavComponent,
    CartComponent,
    FooterComponent,SideNavbarComponent,
  
    

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ADMINModule,
    ADMINRoutingModule,
    LoginRoutingModule,
    UserModule,
    HttpClientModule,
    RouterModule,
    AngmaterialModule,
    UserRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:LoginInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]

})

export class AppModule { }
