import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarticlesComponent } from './listarticles/listarticles.component';
import { CreatearticleComponent } from './createarticle/createarticle.component';
import { EditarticleComponent } from './editarticle/editarticle.component';
import { ListarticletableComponent } from './listarticletable/listarticletable.component';
import { ArticlesCardComponent } from './articles-card/articles-card.component';

const routes: Routes = [
  {path:"articles/listart",component:ListarticlesComponent},/////////////////////n3mlo copier lil ListarticlesComponent:::http://localhost:4200/articles/listart  
  {path:"articles/createarticle",component:CreatearticleComponent},
  {path:"articles/editarticle/:id",component:EditarticleComponent},//Modification dun produits (button majoud fi listArt)
  {path:"articles/listarticletable",component:ListarticletableComponent},
  {path:"products/listarticlesCard",component:ArticlesCardComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
