import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultTextComponent } from './result-text/result-text.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import {UploadGenerateService} from './services/upload-generate.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UploadImageComponent,
    NavbarComponent,
    ResultTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [UploadGenerateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
