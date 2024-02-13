
import { Injectable } from '@angular/core';//1
import { HttpClient,HttpHeaders} from '@angular/common/http';//2
import {Produit} from'./produit';//3
import { Observable,throwError } from 'rxjs';//3
//import { catchError } from 'rxjs';//5 import ysirrclasse b3ad service b3add componenet

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
private apiUrL="http://localhost:3001/api/articles"//apiUrL::variable private



  constructor( private http:HttpClient) { }
//1ére méthode
  getAllproduits():Observable<any>{//un flux de donnéé<any>:quelquont
    return this.http.get(this.apiUrL)//chkoun bich yijbli les données httpclient//li jib les données apiURL===>traj3lik les données en format json de type observable(un flux de données)
  }
//2éme méthode!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  postarticle(art:Produit){//Ajouter un produit
    return this.http.post(this.apiUrL,art)
  }
//3éme méthode!!!!!!!!!!!!!!!!!!!!!!!!!!!!
deletearticle(id:any){
  return this.http.delete(this.apiUrL +"/"+id);
}
//4éme méthode!!!!!!!!!!!!!!!!!!!!!!!!!!!!
putarticleByID(id:any,art:Produit){//modification(update)
return this.http.put(this.apiUrL+"/"+id,art)
}
//5éme méthode!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
getarticleByID(id:any):Observable<any>{//traj3lik article li 3andi id folanu
  return this.http.get(this.apiUrL+"/"+id);
}
//6éme méthode 













  createproduit(){}///création d'une produit
  updateproduit(){}///modification d'une produit
  deleteproduit(){}///supprission d'une produit
  getprodbyid(){}///get produit by id(numéro d'identification d'une produit)
}///
