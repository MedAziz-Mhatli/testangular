import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from '../services/video.service';
import { Video } from '../model/video';

@Component({
  selector: 'app-modifier-video',
  templateUrl: './modifier-video.component.html',
  styleUrls: ['./modifier-video.component.css']
})
export class ModifierVideoComponent implements OnInit {

  video!:Video;
  constructor(private route:Router,private videoService :VideoService) { 
    this.video=new Video();
  }

  ngOnInit(): void {
  }

  updateVideo(){ 
    this.videoService.updateVideo(this.video).subscribe((data:any)=>{
      this.route.navigateByUrl('/videos');
    });
  }
  

}
