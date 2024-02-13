import { Component } from '@angular/core';//import awil haja componenet
import { ScategoriesService } from 'src/app/scategories/scategories.service';
import { Scategorie } from '../scategorie';//import thalith haja lil ism class"scatégorie"====>dima chouf isim classe 9ball

@Component({
  selector: 'app-scategories',
  templateUrl: './scategories.component.html',
  styleUrls: ['./scategories.component.css']
})
export class ScategoriesComponent {
  listScategorie: Scategorie[]=[];//on va déclarer un tableau produit de type produit ha tableau vide
  constructor(private servscat: ScategoriesService) {}//déclarer un objet de type scategorie service
  ngOnInit(){
   //bich n3aytt li service==> get.all.produit bi all service //wa9it li yicharga composant:::::::::::::::::::
  this.servscat.getAllScategories().subscribe((data:Scategorie[])=>{/////////.subscribe:zay haja jdida tosilikk
  //bich t3abi tableau
  this.listScategorie=data;//3abito bi data==>3abina tableau bil les datas wo affichage bil html
 
 
 })
 }
}
