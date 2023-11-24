import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dinosaurio } from './dinosaurio';

@Injectable({
  providedIn: 'root'
})
export class DinosaurioService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getDinosaurios(): Observable<Dinosaurio[]> {
    return this.http.get<Dinosaurio[]>(this.apiUrl);
  }
}
