import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { IndexComponent } from './index/index.component';
import { ChampionDetailComponent } from './champions/champion-detail/champion-detail.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MyNgbModule } from './shared/my-ngb/my-ngb.module';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    IndexComponent,
    ChampionDetailComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MyNgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
