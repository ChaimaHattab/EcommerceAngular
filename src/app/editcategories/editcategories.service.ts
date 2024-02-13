import { Injectable } from '@angular/core';//1
import { HttpClient,HttpHeaders } from '@angular/common/http';//2
import { Editcategories } from './editcategories';//3
import { Observable,throwError } from 'rxjs';//4
import { catchError } from 'rxjs';//5


@Injectable({
  providedIn: 'root'
})
export class EditcategoriesService {
private apiUrl="http://localhost:3001/api/editcategories"
  constructor(private http:HttpClient) { }
  getALLeditcategories():Observable<any>{
    return this.http.get(this.apiUrl)
  }
}
