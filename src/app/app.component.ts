import { Component } from '@angular/core';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';

import { UserModule } from './user/user.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Commerce';


}
