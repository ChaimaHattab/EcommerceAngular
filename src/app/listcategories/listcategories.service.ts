import { Injectable } from '@angular/core';//1
import { HttpClient,HttpHeaders } from '@angular/common/http'; //2:imort du "HttpClient et HttpHeaders"
import { Listcategories } from 'src/app/listcategories/listcategories';//3:import du nom de la classe
import { Observable,throwError } from 'rxjs';//4:imort du observable
import { catchError } from 'rxjs';//4:import du catch error


@Injectable({
  providedIn: 'root'
})
export class ListcategoriesService {
//déclaration du localhost
private apiUrl="http://localhost:3001/api/categories"//apiUrl:c'est varirable privé
  constructor(private http:HttpClient) { }
  getALLlistcategories():Observable<any>{
    return this.http.get(this.apiUrl)//==>recevoir les données en format json de type observable(un flux de donnée)
  }
}
