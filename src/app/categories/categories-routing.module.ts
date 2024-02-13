import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarticlesComponent } from '../products/listarticles/listarticles.component';
import { ScategoriesComponent } from './scategories/scategories.component';
import { AjoutscategorieComponent } from './ajoutscategorie/ajoutscategorie.component';
import { CreatecategoriesComponent } from './createcategories/createcategories.component';
import { EditcategoriesComponent } from './editcategories/editcategories.component';
import { EditscategorieComponent } from './editscategorie/editscategorie.component';
import { ListcategoriesComponent } from './listcategories/listcategories.component';

const routes: Routes = [
  {path:"categories/listcat",component:ListcategoriesComponent},////
  {path:"categories/scat",component:ScategoriesComponent},////
  {path:"categories/ajoutscat",component:AjoutscategorieComponent},////
  {path:"categories/createcat",component:CreatecategoriesComponent},////
  {path:"categories/editcat",component:EditcategoriesComponent},////
  {path:"categories/editscat",component:EditscategorieComponent}////
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
