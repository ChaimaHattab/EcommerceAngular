import { Injectable } from '@angular/core';//ok
import { HttpClient,HttpHeaders} from '@angular/common/http';//méthode lowla
import {Categorie} from'./categorie';//méthode 2
import { Observable,throwError } from 'rxjs';//méthode 3
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrL="http://localhost:3001/api/categories"   //apiUrL::variable private
  constructor(private http:HttpClient) { }

    getAllcategories():Observable<any>{//un flux de donnéé<any>:quelquont
      return this.http.get(this.apiUrL)//chkoun bich yijbli les données httpclient//li jib les données apiURL===>traj3lik les données en format json de type observable(un flux de données)
  }
  //2éme méthode!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  postCategorie(cat:Categorie){
    return this.http.post(this.apiUrL,cat)
  }
  //3éme méthode!!!!!!!!!!!!!!!!!!!!!!!!!!!
  deleteCategorie(id:any){
    return this.http.delete(this.apiUrL+"/"+id)
  }
  //4éme méthode!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  putCategorieById(id:any){//modification(update)
return this.http.get(this.apiUrL+"/"+id);
  }
  //5éme méthode!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  getCategorieById(id:any){//trj3lik id li 3and flan foulani
    return this.http.get(this.apiUrL+"/"+id);
  }
    


  }
