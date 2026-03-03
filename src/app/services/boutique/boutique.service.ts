import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Boutique } from '../../models/boutique.model';
import { API_URL} from '../../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<Boutique[]> {
    return this.http.get<Boutique[]>(`${API_URL}/boutique/listeRestaurants`);
  }

  getBoutiquesHorsRestauration(): Observable<Boutique[]> {
    return this.http.get<Boutique[]>(`${API_URL}/boutique/boutiques-hors-restauration`);
  }

  getBoutiqueInfo(id: string): Observable<Boutique> {
    return this.http.get<Boutique>(`${API_URL}/boutique/infoBoutique/${id}`);
  }


}
