import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL = ' https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTasks(page: number, itemsPerPage: number) {
    const params = {
      _page: page.toString(),
      _limit: itemsPerPage.toString(),
    };
  
    return this.http.get(this.apiURL, { params });
  }
}
