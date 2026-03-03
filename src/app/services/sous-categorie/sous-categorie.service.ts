import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {API_URL} from '../../config/api.config';

export interface SousCategorie {
  _id: string;
  nom: string;
}

@Injectable({
  providedIn: 'root'
})
export class SousCategoriesService {

  constructor(private http: HttpClient) {}

  getSousCategoriesByCategorie(categorieId: string): Observable<SousCategorie[]> {
    return this.http.get<SousCategorie[]>(`${API_URL}/sousCategorie/sousCategoriesCat/${categorieId}`);
  }
}
