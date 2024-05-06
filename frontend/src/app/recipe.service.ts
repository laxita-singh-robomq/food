import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getrecipe(): Observable<any> {
    const url = `${this.apiUrl}/tasks`
    return this.http.get(url);
  }
}
