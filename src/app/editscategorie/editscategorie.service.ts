import { Injectable } from '@angular/core';//1
import { HttpClient,HttpHeaders } from '@angular/common/http';//2
import { Editscategorie } from './editscategorie';//3
import { Observable,throwError } from 'rxjs';//4
import { catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EditscategorieService {
private apiUrl="http://localhost:3001/api/editscategorie"
  constructor(private http:HttpClient) { }
  getALLEditscategorie():Observable<any>{
    return this.http.get(this.apiUrl)
    //==>httpclient hiya li tjibli les données ==>tjibhomli apiUrl==>traja3 les données en format json de type observable(un flux de données)
  }
}
