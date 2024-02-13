import { Component } from '@angular/core';//1
import { CategoriesService } from '../categories.service';//2
import { Categorie } from '../categorie';//3

@Component({
  selector: 'app-createcategories',
  templateUrl: './createcategories.component.html',
  styleUrls: ['./createcategories.component.css']
})
export class CreatecategoriesComponent {
  listecreatecategories: Categorie[]=[];//on va déclarer un tableau vide de type Createcategories qui porte une variabe sous le nom : Createcategories[]=[];//on va déclarer un tableau vide de type Createcategories qui porte une variabe sous le nom listecreatecategories
 
ngOnUnit(){
this.creatcat.getAllcategories().subscribe((data:Categorie[])=>{
//remplir le tableau
this.listecreatecategories=data;
})
}
//on va travailler l'ajout d'un article
//1==>on va créer dans la page html un formulaire et créer u bouon ajouter qui va appeler le service

categories:Categorie=new Categorie()//produit c'est un objet de la classe produit(produit de type Produit)
//on va créer la méthode sauvegarder
constructor(private creatcat:CategoriesService){}//insatance de l'objet de type article service
Sauvegarder(){//button
  //n3ayatt li service:products.service bil méthode createproduit mawjouda fi article service
 // n3ayt lil méthode===>nisn3 instance min classe products service
 this.creatcat.postCategorie(this.categories).subscribe((data)=>
  console.log("insertion effectuer avec sucées"))
  //produit far8 ltw ma3abinah
}
}

