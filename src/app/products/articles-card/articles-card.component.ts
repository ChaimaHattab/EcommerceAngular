import { Component } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Produit } from '../produit';


@Component({
  selector: 'app-articles-card',
  templateUrl: './articles-card.component.html',
  styleUrls: ['./articles-card.component.css']
})
export class ArticlesCardComponent {
  tabproduit: Produit[]=[];

constructor(private prodserv:ArticlesService ){}
ngOnInit(){
 
 this.loadarticle();
}


loadarticle(){
  this.prodserv.getAllproduits().subscribe(data=>{
  this.tabproduit=data;
 //bich t3abi tableau
 ;//3abito bi data==>3abina tableau bil les datas wo affichage bil html
})
}
}
