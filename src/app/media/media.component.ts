import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-media",
  templateUrl: "./media.component.html",
  styleUrls: ["./media.component.css"],
})
export class MediaComponent implements OnInit {
  show: any = false;
  constructor() {}

  ngOnInit() {}
  showSearch() {
    console.log("asd");
    this.show = !this.show;
  }
}
