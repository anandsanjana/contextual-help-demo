import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from  '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { ContextualHelpModule } from './contextual-help/contextual-help.module';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TrekListComponent } from './components/trek-list/trek-list.component';
import { TrekDetailComponent } from './components/trek-detail/trek-detail.component';
import { DataService } from './data.service';
import { AppNavComponent } from './components/app-nav/app-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrekListComponent,
    TrekDetailComponent,
    AppNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    CustomMaterialModule,
    AppRoutingModule,
    ContextualHelpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
