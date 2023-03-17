import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/tareas/';
  }

  getListTasks(): Observable<Task>{
    return this.http.get<Task>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteTask(_id: string): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${_id}`);
  }

  addTask(task: Task): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, task)
  }

  getTask(id: string): Observable<Task>{
    return this.http.get<Task>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  updateTask(id: string, task: Task): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, task)
  }
}