import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Panier, PanierItem } from '../../models/panier.model';
import { API_URL} from '../../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(private http: HttpClient) {}

  getPanier(): Observable<Panier> {
    return this.http.get<Panier>(`${API_URL}/panier/voirPanier`);
  }

  ajouterAuPanier(produitId: string, quantite: number, prixUnitaire: number, taille?: string): Observable<Panier> {
    return this.http.post<Panier>(`${API_URL}/panier/ajouterPanier`, { produitId, quantite, prixUnitaire, taille });
  }

  modifierQuantite(produitId: string, quantite: number): Observable<Panier> {
    return this.http.put<Panier>(`${API_URL}/panier/modifier/${produitId}`, { quantite });
  }

  supprimerArticle(produitId: string): Observable<Panier> {
    return this.http.delete<Panier>(`${API_URL}/panier/supprimer/${produitId}`);
  }

  viderPanier(): Observable<any> {
    return this.http.delete(`${API_URL}/panier/vider`);
  }
}
