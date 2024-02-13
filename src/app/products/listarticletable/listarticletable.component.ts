import { Component } from '@angular/core';
import { ArticlesService } from "../articles.service"
import { Produit } from '../produit';

@Component({
  selector: 'app-listarticletable',
  templateUrl: './listarticletable.component.html',
  styleUrls: ['./listarticletable.component.css']
})
export class ListarticletableComponent {
  tabproduit: Produit[]=[];//on va déclarer un tableau produit de type produit ha tableau vide
  constructor(private listartserv: ArticlesService) {}
  //déclarer un objet de type article service
  ngOnInit(){
   //bich n3aytt li service==> get.all.produit bi all service //wa9it li yicharga composant:::::::::::::::::::
  this.listartserv.getAllproduits().subscribe((data:Produit[])=>{/////////.subscribe:zay haja jdida tosilikk
  //bich t3abi tableau
  this.tabproduit=data//3abito bi data==>3abina tableau bil les datas wo affichage bil html
  console.log("hhhhh: "+this.tabproduit)
})
}
//pour supprimer l'une des produits qui sont aux tableaux on va utiliser

deleteprd(id:any){
  this.listartserv.deletearticle(id).subscribe((res:any)=> {
    this.tabproduit = this.tabproduit.filter(pr => pr._id != id);
    console.log('Post deleted successfully!');
    })
    }
}