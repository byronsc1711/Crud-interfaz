se debe copiar en appmodule lo siguiente: estas son las rutas

  {path: '', component: PrincipalComponent},
  {path: 'menu', component: PrincipalComponent},
  {path: 'blogs', component: Blog1Component},
  {path: 'form1', component: Form1Component},
  {path: 'form1/id', component: Form1Component},
  {path: 'cat', component: Categ1Component},
  {path: 'form2', component: Form2Component},
  {path: 'com', component: Coment1Component},
  {path: 'form3', component: Form3Component},
  
  //esto va en declarations
    PrincipalComponent,
    Blog1Component,
    Form1Component,
    Categ1Component,
    Form2Component,
    Coment1Component,
    Form3Component
    
    en imports va lo siguiente
    
    RouterModule.forRoot(routes)
    
    
En el archivo llamado app.component.html va 

  <div class="container">
    <router-outlet></router-outlet>
  </div>

Se debe copiar primero todos los archivos que se encuentran en la carpeta components
Se debe copiar dentro de la carpeta pages/blogs todos los elementos que son blog1 y form1
Se debe copiar dentro de la carpeta pages/categorias todos los elementos de categ1 y form2
Se debe copiar dentro de la carpeta pages/comentarios todos los elementos de coment1 y form3
En la carpeta services se debe copiar el archivo data.service

