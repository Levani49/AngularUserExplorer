import { Posts } from './../models/posts.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsListService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPostsByUserId(userId: number): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.apiUrl}?userId=${userId}`);
  }

}
