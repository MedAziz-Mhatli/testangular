import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from './models/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = 'http://localhost:3000/videos'; // URL de l'API

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer la liste des vidéos
  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.apiUrl);
  }

  // Méthode pour récupérer une vidéo par son id
  getVideo(id: number): Observable<Video> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Video>(url);
  }

  // Méthode pour ajouter une vidéo
  addVideo(video: Video): Observable<Video> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Video>(this.apiUrl, video, httpOptions);
  }

  // Méthode pour modifier une vidéo
  updateVideo(video: Video): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = `${this.apiUrl}/${video.id}`;
    return this.http.put(url, video, httpOptions);
  }

  // Méthode pour supprimer une vidéo
  deleteVideo(id: number): Observable<Video> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Video>(url);
  }
}
