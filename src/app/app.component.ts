import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  readonly VAPID_PUBLIC_KEY =
    "BE_gsaNY__jChEJsXpNuxPz7DKHMDf4iLN1nEtWEFS8b6DwF4Q9HCu_gSs21gmCsEHhFS6WKGqZbS7uMkL8Nu_4";
  title = "ks-app";
  showModal: any = true;
  constructor() {
    this.getPosition();
  }
  hide() {
    this.showModal = false;
  }
  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (resp) => {
          resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
