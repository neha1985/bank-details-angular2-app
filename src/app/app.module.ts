import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './routing';

import { BankDetailService } from './services/bank.detail.service';
import { GlobalConfig } from './config/gobal.config';

import { BankDetailsComponent } from './bank.detail.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BankDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [GlobalConfig,BankDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
