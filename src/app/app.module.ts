import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TodayComponent } from './pages/today/today.component';
import { HttpClientModule } from '@angular/common/http';
import { TomorrowComponent } from './pages/tomorrow/tomorrow.component';
import { TenDaysComponent } from './pages/ten-days/ten-days.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TodayComponent,
    TomorrowComponent,
    TenDaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
