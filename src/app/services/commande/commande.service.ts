import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande } from '../../models/commande.model';
import { API_URL} from '../../config/api.config';

export interface Adresse {
  rue: string;
  ville: string;
  codePostal: string;
  pays: string;
}

@Injectable({ providedIn: 'root' })
export class CommandeService {

  constructor(private http: HttpClient) {}

  passerCommande(data: { typeLivraison: string; adresseLivraison?: string }): Observable<{ message: string; commande: Commande }> {
    return this.http.post<{ message: string; commande: Commande }>(`${API_URL}/commande/passerCommande`, data);
  }

  getMesCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${API_URL}/commande/listeMesCommandes`);
  }
}
