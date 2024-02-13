import { Component } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Produit } from '../produit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.component.html',
  styleUrls: ['./createarticle.component.css']
})
export class CreatearticleComponent {
//on va travailler l'ajout d'un article
//1:on va créer dans lapage html un formulaire et créer bouton ajouter qui va appleler le service

produit:Produit=new Produit();//produit c'est un objet de la classe Produit(produit de type Produit)
//on va créer la méthode sauvegarder
constructor(private prodserv:ArticlesService ){}//insatance de l'objet de type article service
//Sauvegarder(){//button
  //n3ayatt li service:products.service bil méthode createproduit li hiya postproduit mawjouda fi products service
 // n3ayt lil méthode===>nisn3 instance min classe products service
 //this.prodserv.postarticle(this.produit).subscribe((data)=>
 // console.log("insertion effectuer avec sucées"))
  //produit far8 ltw ma3abinah
//}
sauvegarder(){
  this.prodserv.postarticle(this.produit).subscribe((data => { 
    console.log("Product Added Successfully")
}))



}
}
