import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';

import { CustomerService } from './customers/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomerDetailsComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})

export class AppModule { }
