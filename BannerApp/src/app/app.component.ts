import { Component, AfterViewChecked } from '@angular/core';

@Component({
    selector: 'app-root',
    template: ` <div id="banner_container" class="banner_container" (click)="gotoExternalSite();">
             <ul id=\"slides\"><li><img src=\"../assets/images/1.jpg\"></li>
             <li><img src=\"../assets/images/2.jpg\"></li>
             <li><img src=\"../assets/images/3.jpg\"></li>
             <li><img src=\"../assets/images/4.jpg\"></li>
             <li><img src=\"../assets/images/5.jpg\"></li>
             <li on-mouseover= \"setVideoVolume();\"><video id=\"videoItem\" muted>
              <source src=\"../assets/videos/video.mp4\" type=\"video/mp4\">
              <source src=\"../assets/videos/video.webm\" type=\"video/webm\">
              Your browser does not support the video tag.
              </video></li></ul> </div>`,
    styleUrls: ['./app.component.less']
})


export class AppComponent implements AfterViewChecked {
    title = 'BannerApp';
    currentSlide = 0;
    slides: NodeListOf<Element>;
    slideInterval: any;
    vid: HTMLVideoElement;
    ImageDisplayTime = 4000;
    VideoDisplayTime = 35000;

    constructor() {
        this.slideInterval = setInterval(() => { this.nextSlide(); }, this.ImageDisplayTime); // Play sideshow by changing slide every 4 sec
    }

    ngAfterViewChecked(): void {
        this.slides = document.querySelectorAll('#slides li');
        this.vid = <HTMLVideoElement>document.getElementById('videoItem');
    }

    gotoExternalSite(): void {
        location.href = 'http://www.ceteri.se';
    }

    nextSlide(): void {
        this.slides[this.currentSlide].className = 'hideSlide';
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.slides[this.currentSlide].className = 'showSlide';

        if (this.slides[this.currentSlide].firstChild.nodeName === 'VIDEO') {
            clearInterval(this.slideInterval);
            this.slideInterval = false;
            this.vid.play();
            this.vid.volume = 0;
            setTimeout(() => { this.nextSlide(); }, this.VideoDisplayTime);
        }
        else if (this.slides[this.currentSlide].firstChild.nodeName === 'IMG' && this.slideInterval === false) {
            this.slideInterval = setInterval(() => { this.nextSlide(); }, this.ImageDisplayTime);
        }
    }

    setVideoVolume(): void {
        this.vid.volume = 1;
    }

}

