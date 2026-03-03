import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {API_URL} from '../../config/api.config';
@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) {}

  ajouterStock(data: { produitId: string; taille?: string; quantite: number }): Observable<any> {
    return this.http.post(`${API_URL}/stock/ajouterStock`, data);
  }

  getStockParProduit(produitId: string): Observable<{ taille: string; quantite: number }[]> {
    return this.http.get<any>(`${API_URL}/stock/infoStockProduit/${produitId}`).pipe(
      map(response => {
        if (response && response.stockParTaille) {
          return response.stockParTaille.map((item: any) => ({
            taille: item._id,
            quantite: item.total
          }));
        }
        return [];
      })
    );
  }
}
