import { Component, OnInit } from '@angular/core';
import { Video } from '../model/video';
import { VideoService } from '../services/video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  video!:Video;
  constructor(private route:Router,private videoService :VideoService) { 
    this.video=new Video();
  }

  ngOnInit(): void {
  }

  addVideo(){ 
    this.videoService.addVideo(this.video).subscribe((data:any)=>{
      this.route.navigateByUrl('/videos');
    });
  }

}
