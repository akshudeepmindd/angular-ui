import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  url: string =
    "https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=63e0c53c-2a5c-4e52-a32a-8cb49a458f0a&client_is_mobile=true&glfa_cid=574196014.1555701256&glfa_t=1555707158912";
  urlSafe: SafeResourceUrl;
  setUrl: Function;
  constructor(public sanitizer: DomSanitizer) {}
  public setIframUrl() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    console.log("hello");
  

  }
  ngOnInit() {}

}
