import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Route, RouterModule} from '@angular/router'
import { PrincipalComponent } from './blog/components/principal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Blog1Component } from './blog/pages/blogs/blog1.component';
import { Form1Component } from './blog/pages/blogs/form1.component';
import { Categ1Component } from './blog/pages/categorias/categ1.component';
import { Form2Component } from './blog/pages/categorias/form2.component';
import { Coment1Component } from './blog/pages/comentarios/coment1.component';
import { Form3Component } from './blog/pages/comentarios/form3.component';

const routes: Route[] = [
  {path: '', component: PrincipalComponent},
  {path: 'menu', component: PrincipalComponent},
  {path: 'blogs', component: Blog1Component},
  {path: 'form1', component: Form1Component},
  {path: 'form1/id', component: Form1Component},
  {path: 'cat', component: Categ1Component},
  {path: 'form2', component: Form2Component},
  {path: 'com', component: Coment1Component},
  {path: 'form3', component: Form3Component},


];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    Blog1Component,
    Form1Component,
    Categ1Component,
    Form2Component,
    Coment1Component,
    Form3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
