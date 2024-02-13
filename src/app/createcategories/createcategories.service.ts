import { Injectable } from '@angular/core';//1
import { HttpClient,HttpHeaders } from '@angular/common/http';//2
import { Createcategories } from './createcategories';//3
import { Observable,throwError } from 'rxjs';//4
import { catchError } from 'rxjs';//5

@Injectable({
  providedIn: 'root'
})
export class CreatecategoriesService {
private apiUrl="http://localhost:3001/api/createcategories"
constructor(private http:HttpClient){}
getALLCreatecategories():Observable<any>{
  return this.http.get(this.apiUrl)
}

}
