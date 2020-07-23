import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-commonscreen",
  templateUrl: "./commonscreen.component.html",
  styleUrls: ["./commonscreen.component.css"],
})
export class CommonscreenComponent implements OnInit {
  show: any = false;
  constructor() {}

  ngOnInit() {}
  showSearch() {
    console.log("asd");
    this.show = !this.show;
  }
}
