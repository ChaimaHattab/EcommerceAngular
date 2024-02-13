import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { CreatecategoriesComponent } from './createcategories/createcategories.component';
import { EditcategoriesComponent } from './editcategories/editcategories.component';
import { ScategoriesComponent } from './scategories/scategories.component';
import { AjoutscategorieComponent } from './ajoutscategorie/ajoutscategorie.component';
import { EditscategorieComponent } from './editscategorie/editscategorie.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListcategoriesComponent,
    CreatecategoriesComponent,
    EditcategoriesComponent,
    ScategoriesComponent,
    AjoutscategorieComponent,
    EditscategorieComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    DataTablesModule,//html<balise>
    FormsModule//24/04/2024
  ]
})
export class CategoriesModule { }
