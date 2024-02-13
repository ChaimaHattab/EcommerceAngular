import { Component } from '@angular/core';//1
import { EditscategorieService } from 'src/app/editscategorie/editscategorie.service';//2:import du nom de la classe.service
import { Editscategorie } from 'src/app/editscategorie/editscategorie';//3:import du nom de la classe


@Component({
  selector: 'app-editscategorie',
  templateUrl: './editscategorie.component.html',
  styleUrls: ['./editscategorie.component.css']
})
export class EditscategorieComponent {
listeditcat: Editscategorie[]=[];//création d'une tableau vide de type Editscategorie
constructor(private tabeditcat: EditscategorieService){}
ngOnUnit(){
  this.tabeditcat.getALLEditscategorie().subscribe((data:Editscategorie[])=>{//hatina leseditscategorieskoll fil data
  this.listeditcat=data;//hatina les données mt3 data kol sabinhom fi tableau li 3amlnalou création 3al lwil
  })
}
}
