import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"],
})
export class NotificationComponent implements OnInit {
  show: any = false;
  constructor() {}

  ngOnInit() {}
  showSearch() {
    console.log("asd");
    this.show = !this.show;
  }
}
