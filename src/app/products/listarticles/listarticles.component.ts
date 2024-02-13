import { Component } from '@angular/core';
import { ArticlesService } from "../articles.service"//import de du service "ArticlesService" li mawjouda fil "articles.service.ts"
import { Produit } from "../produit";//import de la classe produit



@Component({
  selector: 'app-listarticles',
  templateUrl: './listarticles.component.html',
  styleUrls: ['./listarticles.component.css']
})
export class ListarticlesComponent {
 tabproduit: Produit[]=[];//on va déclarer un tableau produit de type produit ha tableau vide
 constructor(public artserv: ArticlesService) {}//déclarer un objet de type article service
 ngOnInit(){
  //bich n3aytt li service==> get.all.produit bi all service //wa9it li yicharga composant:::::::::::::::::::
 this.artserv.getAllproduits().subscribe((data:Produit[])=>{/////////.subscribe:ay haja jdida tosilikk
 //bich t3abi tableau
 this.tabproduit=data;//3abito bi data==>3abina tableau bil les datas wo affichage bil html
})
}
//pour supprimer l'une des produits qui sont aux tableaux on va utiliser

deleteprd(id:any){
  this.artserv.deletearticle(id).subscribe((res:any)=> {
    this.tabproduit = this.tabproduit.filter(pr => pr._id != id);
    console.log('Post deleted successfully!');
    })
    }
}
