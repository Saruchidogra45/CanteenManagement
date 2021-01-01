import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexnavbarComponent } from './index/indexnavbar/indexnavbar.component';
import { MainComponent } from './index/main/main.component';
import { FormsModule } from '@angular/forms';
// toster
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NotfoundComponent } from './error/notfound/notfound.component';
import { FoodComponent } from './index/food/food.component';
import { ChefsComponent } from './index/chefs/chefs.component';
import { HeaderComponent } from './index/header/header.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { LoginregisterComponent } from './auth/loginregister/loginregister.component';
import { AdminGuard } from './admin/admin.guard';
import { UserGuard } from './user/user.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ServererrorComponent } from './error/servererror/servererror.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ResetPasswordDoneComponent } from './auth/reset-password-done/reset-password-done.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexnavbarComponent,
    MainComponent,
    NotfoundComponent,
    FoodComponent,
    ChefsComponent,
    HeaderComponent,
    AdminhomeComponent,
    UserhomeComponent,
    LoginregisterComponent,
    ServererrorComponent,
    ResetComponent,
    ResetPasswordComponent,
    ResetPasswordDoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations  module
    ToastrModule.forRoot(),
  ],
  providers: [AdminGuard,UserGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
