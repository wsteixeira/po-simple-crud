import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private endpoint = `${environment.apiURL}/api/v1/users`;

  private readonly headers: HttpHeaders = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true',
  });

  constructor(private http: HttpClient) {}

  getEndpoint(): string {
    return this.endpoint;
  }

  // Deleta um único recurso
  deleteResource(id?: string): Observable<any> {
    return this.http.delete(`${this.endpoint}/${id}`, {
      headers: this.headers,
    });
  }

  // Deleta recursos em lote
  deleteResources(ids: Array<any>): Observable<any> {
    return this.http.request('delete', `${this.endpoint}`, {
      headers: this.headers,
      body: ids,
    });
  }

  // Busca uma lista de recursos
  getResources(params?: HttpParams): Observable<any> {
    return this.http.get(`${this.endpoint}`, { headers: this.headers, params });
  }

  // Busca um único recurso
  getResource(id: string): Observable<any> {
    return this.http.get(`${this.endpoint}/${id}`, { headers: this.headers });
  }

  // Cria um recurso
  createResource(resource: any): Observable<any> {
    return this.http.post(`${this.endpoint}`, resource, {
      headers: this.headers,
    });
  }

  // Atualiza um recurso
  updateResource(id: string, resource: any): Observable<any> {
    return this.http.put(`${this.endpoint}/${id}`, resource, {
      headers: this.headers,
    });
  }
}
