import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListarticlesComponent } from './listarticles/listarticles.component';
import { CreatearticleComponent } from './createarticle/createarticle.component';
import { EditarticleComponent } from './editarticle/editarticle.component';
import { ListarticletableComponent } from './listarticletable/listarticletable.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { ArticlesCardComponent } from './articles-card/articles-card.component';


@NgModule({
  declarations: [
    ListarticlesComponent,
    CreatearticleComponent,
    EditarticleComponent,
    ListarticletableComponent,
    ArticlesCardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    DataTablesModule,//li bich nistha9ha lyoum nhar lahaadd tb3a  ((<input type="text" class="form-control" name="reference" id="reference" [(ngModel)]="produit.reference" placeholder="reference"/>))
    FormsModule///24/01/2024
  ]
})
export class ProductsModule { }
