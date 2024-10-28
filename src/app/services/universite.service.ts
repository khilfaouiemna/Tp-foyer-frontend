import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Universite {
  idUniversite: number;
  nomUniversite: string;
  adresse: string;
}

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  private apiUrl = 'http://192.168.50.4:8089/tpfoyer/universite/retrieve-all-universites';

  constructor(private http: HttpClient) {}

  getUniversites(): Observable<Universite[]> {
    return this.http.get<Universite[]>(this.apiUrl);
  }
}
