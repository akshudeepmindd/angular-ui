import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NotificationComponent } from "./notification/notification.component";
import { NewsletterComponent } from "./newsletter/newsletter.component";
import { MenuComponent } from "./menu/menu.component";
import { AboutComponent } from "./about/about.component";
import { FeedbackComponent } from "./feedback/feedback.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { HomeComponent } from "./home/home.component";
import { InfoComponent } from "./info/info.component";
import { MediaComponent } from "./media/media.component";
import { ReviewComponent } from "./review/review.component";
import { RouterModule } from "@angular/router";
import { SettingsComponent } from "./settings/settings.component";
import { SignupComponent } from "./signup/signup.component";
import { PrivacyComponent } from "./privacy/privacy.component";
import { CommonscreenComponent } from "./commonscreen/commonscreen.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { DeliverComponent } from "./deliver/deliver.component";

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    NewsletterComponent,
    MenuComponent,
    AboutComponent,
    FeedbackComponent,
    GalleryComponent,
    HomeComponent,
    InfoComponent,
    MediaComponent,
    ReviewComponent,
    SettingsComponent,
    SignupComponent,
    PrivacyComponent,
    CommonscreenComponent,
    DeliverComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "info", component: InfoComponent },
      { path: "about", component: AboutComponent },
      { path: "menu", component: MenuComponent },
      { path: "review", component: ReviewComponent },
      { path: "gallery", component: GalleryComponent },
      { path: "media", component: MediaComponent },
      { path: "feedback", component: FeedbackComponent },
      { path: "notification", component: NotificationComponent },
      { path: "settings", component: SettingsComponent },
      { path: "newsletter", component: NewsletterComponent },
      { path: "signup", component: SignupComponent },
      { path: "privacy", component: PrivacyComponent },
      { path: "commonscreen", component: CommonscreenComponent },
      { path: "deliver", component: DeliverComponent },
    ]),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
