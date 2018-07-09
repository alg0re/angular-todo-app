import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AuthManagerComponent } from './containers/auth-manager/auth-manager.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    FormsModule,
    AuthRoutingModule
  ],
  exports: [
    AuthManagerComponent
  ],
  declarations: [
    AuthManagerComponent,
    LoginPageComponent
  ],
  providers: [],
})
export class AuthModule { }
