import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ADMINModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginInterceptor } from './Interceptors/login.interceptor';
import { ErrorInterceptor } from './Interceptors/error.interceptor';
import { UserRoutingModule } from './user/user-routing.module';
import { ADMINRoutingModule } from './admin/admin-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { NgxPaginationModule } from "ngx-pagination";
import { MatExpansionModule } from '@angular/material/expansion';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { ChartsModule } from 'ng2-charts';
import { WomensSubpageComponent } from './components/womens-subpage/womens-subpage.component';
import { KidsSubpageComponent } from './kids-subpage/kids-subpage.component';


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
    FooterComponent,
    SideNavbarComponent,
    WomensSubpageComponent,
    KidsSubpageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ADMINModule,
    ADMINRoutingModule,
    LoginRoutingModule,
    UserModule,
    RouterModule,
    AngmaterialModule,
    UserRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,
    NgbModule,
    NgxPaginationModule,
    MatExpansionModule,
    SharedModuleModule,
    ChartsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]

})

export class AppModule { }
