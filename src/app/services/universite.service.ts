import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Universite {
  idChambre: number;
  numeroChambre: number;
  typeC: string;
}

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  private apiUrl = 'http://192.168.186.130:8089/tpfoyer/chambre/retrieve-all-chambres';

  constructor(private http: HttpClient) {}

  getUniversites(): Observable<Universite[]> {
    return this.http.get<Universite[]>(this.apiUrl);
  }
}
