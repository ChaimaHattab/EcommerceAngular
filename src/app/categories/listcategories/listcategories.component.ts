import { Component } from '@angular/core';//import awil hajalil component
import { ListcategoriesService } from 'src/app/listcategories/listcategories.service';
import { Categorie } from '../categorie';
//5atir listecategorie mhich mwjouda classe fil base de donnée "backend"
@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css']
})
export class ListcategoriesComponent {
 listListcategories:Categorie[]=[];//on va déclarer un tableau vide de type listListcategories sous le nom "Listcategories"
 constructor (private  listlistcat :ListcategoriesService){}//déclarer un objet de type "Listcategories" sous le nom listlistcat
 ngOnInit(){
  this.listlistcat.getALLlistcategories().subscribe((data:Categorie[])=>{
    //on va remplir le tableau vide q'on va le déclarer premiérement
    this.listListcategories=data;
  })
 }
}
