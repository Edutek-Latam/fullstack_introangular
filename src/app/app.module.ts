import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalComponent } from './total/total.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormTemplateComponent } from './page/form-template/form-template.component';
import { FormRactiveComponent } from './page/form-ractive/form-ractive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TotalComponent,
    NavbarComponent,
    SidebarComponent,
    FormTemplateComponent,
    FormRactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
