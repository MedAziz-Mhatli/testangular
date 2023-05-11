import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from '../services/video.service';
import { Video } from '../model/video';

@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.component.html',
  styleUrls: ['./list-video.component.css']
})
export class ListVideoComponent implements OnInit {

  listVideo!:Video[]; 
  
  constructor(private route:Router,private videoService :VideoService) {
    this.listVideo=[];
   }

  ngOnInit(): void {
  }

    getVideo(){ 
      this.videoService.getVideos().subscribe((data:Video[])=>{
        this.listVideo=data;
      });
    } 
    delete(id:number){ 
      this.videoService.deleteVideo(id).subscribe((data:any)=>{ 
        this.route.navigateByUrl('videos');
      })
    }
    update(video:Video){ 
      this.route.navigateByUrl('updateVideo');
    }


   

}