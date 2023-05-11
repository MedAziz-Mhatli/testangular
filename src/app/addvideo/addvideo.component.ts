import { Component, OnInit } from '@angular/core';
import { Video } from '../models/video';
import { VideoService } from '../videoservice.service';
@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddvideoComponent implements OnInit {
  video: Video = new Video();


  constructor(private videoService: VideoService) { }

  onSubmit() {
    this.videoService.addVideo(this.video)
      .subscribe(() => {
        alert('La vidéo a été ajoutée avec succès.');
        this.video = new Video();
      });
  }

  ngOnInit(): void {
  }
  verifierGenre() {
    const genresValides = ['action', 'documentaire', 'comédie'];
        return !genresValides.includes(this.video.genre.toLowerCase());
  }
  
}
