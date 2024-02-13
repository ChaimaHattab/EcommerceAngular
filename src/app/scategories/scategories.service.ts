import { Injectable } from '@angular/core';//ok
import { HttpClient,HttpHeaders } from '@angular/common/http';//méthode lowlaa
import { Scategorie } from '../categories/scategorie';//méthode thanya
import { Observable,throwError } from 'rxjs';//méthode 3
import { catchError, } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ScategoriesService {
private apiURl="http://localhost:3001/api/scategories"//apiUrL::variable private
  constructor(private http:HttpClient) { }
  //1ére méthode
   getAllScategories():Observable<any>{//un flux de donnéé<any>:quelquont
  return this.http.get(this.apiURl)//chkoun bich yijbli les données httpclient//li jib les données apiURL===>traj3lik les données en format json de type observable(un flux de données)
  }
  //2éme méthode!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  postScategorie(art:Scategorie){//????????normalement de type "scategorie"
    return this.http.post(this.apiURl,art)
  }
  //3éme méthode!!!!!!!!!!!!!!!!!!!!!!!!!!!!
deletecategorie(id:any){
  return this.http.delete(this.apiURl +"/"+id)
}
//4éme méthode!!!!!!!!!!!!!!!!!!!!!!!!!!!!
putcategorieByID(id:any){//modification(update)
  return this.http.get(this.apiURl+"/"+id);
  }
  //5éme méthode!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
getcategorieByID(id:any){//traj3lik article li 3andi id folanu
  return this.http.get(this.apiURl+"/"+id);
}
}
