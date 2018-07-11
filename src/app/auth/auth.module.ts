import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AuthManagerComponent } from './containers/auth-manager/auth-manager.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

import { EffectsModule } from '@ngrx/effects';
import { effects } from './effects';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    AuthRoutingModule,
    EffectsModule.forFeature(effects)
  ],
  exports: [
    AuthManagerComponent
  ],
  declarations: [
    AuthManagerComponent,
    LoginPageComponent
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
})
export class AuthModule { }
