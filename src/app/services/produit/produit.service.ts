import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Boutique } from '../../models/boutique.model';
import {Produit} from '../../models/produit.model';
import {API_URL} from '../../config/api.config';



@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl = 'http://localhost:5000/produit';

  constructor(private http: HttpClient) {}

  getProduitsBoutique(boutiqueId: string): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}/produit/produitsBoutique/${boutiqueId}`);
  }

  ajouterProduit(formData: FormData): Observable<any> {
    return this.http.post(`${API_URL}/produit/ajouterProduit`, formData);
  }

  modifierProduit(id: string, formData: FormData): Observable<any> {
    return this.http.put(`${API_URL}/produit/modifierProduit/${id}`, formData);
  }

  supprimerProduit(id: string): Observable<any> {
    return this.http.delete(`${API_URL}/produit/supprimerProduit/${id}`);
  }

  getProduitsPublic(boutiqueId: string): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${API_URL}/produit/produitsBoutique/${boutiqueId}`);
  }

  getProduitById(id: string): Observable<Produit> {
    return this.http.get<Produit>(`${API_URL}/produit/infoProduit/${id}`);
  }

  rechercherProduits(params: any): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiUrl}/rechercherProduits`, {params});
  }

}
