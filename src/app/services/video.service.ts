import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from '../model/video';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  url:string='http://localhost:3000/videos';

  constructor(private http:HttpClient) { }
  getVideos(){ 
    return this.http.get<Video[]>(this.url);
  }
  addVideo(video:Video){ 
    return this.http.post<Video>(this.url,video);
  }
  updateVideo(video:Video){ 
    return this.http.put<Video>(this.url,video);
  }
  deleteVideo(id:number){ 
    return this.http.delete<void>(this.url+"/"+id);
  }


}
