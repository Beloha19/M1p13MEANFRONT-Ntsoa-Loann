import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../../models/categorie.model';
import { API_URL} from '../../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) {}

  getCategoriesHorsRestauration(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${API_URL}/categorie/listeCategoriesHorsRestauration`);
  }

  getAllCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${API_URL}/categorie/listeCategories`);
  }

}
