import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import{HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms'
import { CategoriaEditComponent } from './components/categoria-edit/categoria-edit.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { ArticuloEditComponent } from './components/articulo-edit/articulo-edit.component';


//import { AppRoutingModule } from './app-routing.module';

//import { UserComponent } from './user/user.component';
//import{DataService} from './data.service';

const appRoutes:Routes =[

  {path:'categorias',
   component:CategoriasComponent
  },
  {path:'categorias/ed/:id',
   component:CategoriaEditComponent
  },
  {path:'articulos',
   component:ArticulosComponent},
  {path:'articulos/ed/:id',
   component:ArticuloEditComponent
  },

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriaEditComponent,
   CategoriasComponent,
   ArticulosComponent,
  ArticuloEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  //  AppRoutingModule(approutes),
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
