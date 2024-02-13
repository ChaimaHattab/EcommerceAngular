import { Component } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Produit } from '../produit';
import { ScategoriesService } from 'src/app/scategories/scategories.service';
import { Scategorie } from 'src/app/categories/scategorie';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.css']
})
export class EditarticleComponent {
  /******************************************************* */
  _id?:object;
  article: Produit = new Produit()//créer un objet article de type produit =new Produit bch y3tii les objects koll des articles ama far8in
  tabscat?:any;
  /********************************************* */
  constructor(private artserv:ArticlesService, private scatserv:ScategoriesService,private router:Router,private route:ActivatedRoute ) { }
  ngOnInit(): void {
 //////// this.loadscategories();
  this.article=new Produit();
  this._id=this.route.snapshot.params['id']; //ta5ou id li tab3a route
  this.artserv.getarticleByID(this._id).subscribe(data=>this.article=data);
  console.log(this.article)
  }
  /******************************************************************************** */
  modifarticle(){ 
    this.artserv.putarticleByID(this._id,this.article).subscribe(data=>this.router.navigate(['/articles/listarticletable']))//inti lhna 3atito wo bich tjo modification fi listatablearticle nouch f liste rticle kan thibha tgi fi listearticle iktib fo route fi 3outh listetablearticle//=>Listearticle
    }
    
    
    
 
  
}
