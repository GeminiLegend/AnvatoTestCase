import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from "@angular/platform-browser";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  safe_url: SafeResourceUrl;
  postLink;

  constructor(
    public navCtrl: NavController,
    private sanitizer: DomSanitizer) {

      this.postLink = "https://seccountry.staging.wpengine.com/tennessee/tennessee-vols-sounds-off-bye-week-work-georgia-south-carolina-next-game/amp?_clean&_device=pwa"
  }

  ionViewDidLoad(){
    this.safe_url = this.sanitizer.bypassSecurityTrustResourceUrl(this.postLink)
  }
}
