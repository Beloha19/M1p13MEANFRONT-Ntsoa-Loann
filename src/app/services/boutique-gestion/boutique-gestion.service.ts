import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { Boutique } from '../../models/boutique.model';
import { AuthService } from '../auth/auth.service';
import { API_URL } from '../../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueGestionService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}


  getProfilBoutique(): Observable<Boutique> {
    return this.http.get<Boutique>(`${API_URL}/boutique/maBoutique`).pipe(
      switchMap(boutique =>
        this.http.get<Boutique>(`${API_URL}/boutique/infoBoutique/${boutique._id}`)
      )
    );
  }

  updateInfos(boutiqueId: string, data: Partial<Boutique>): Observable<Boutique> {
    return this.http.put<Boutique>(`${API_URL}/boutique/modifierInfoBoutique/${boutiqueId}`, data);
  }

  updateHoraires(boutiqueId: string, horaires: any[]): Observable<Boutique> {
    return this.http.put<Boutique>(`${API_URL}/boutique/modifierHoraireBoutique/${boutiqueId}/horaires`, { horaires });
  }

}
