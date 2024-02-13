import { Component } from '@angular/core';//1:impot du component
import { EditcategoriesService } from 'src/app/editcategories/editcategories.service';//2
import { Editcategories } from 'src/app/editcategories/editcategories';

@Component({
  selector: 'app-editcategories',
  templateUrl: './editcategories.component.html',
  styleUrls: ['./editcategories.component.css']
})
export class EditcategoriesComponent {
  listeditcategorie: Editcategories[]=[];//on va déclarer un tableau vide de type Editcategories qui porte un nom listeditcategorie
  constructor(private editcat: EditcategoriesService){}
  ngOnUnit(){
    this.editcat.getALLeditcategories().subscribe((data:Editcategories[])=>{
//remplir le tableau
this.listeditcategorie=data;
    
    
    
    })
  }

}
