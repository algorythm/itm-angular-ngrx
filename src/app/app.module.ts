import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { companyReducer } from 'src/reducers/company.reducer';
import { CompaniesComponent } from './components/companies/companies.component';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffects } from 'src/effects/company.effects';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({company: companyReducer}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CompanyEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
