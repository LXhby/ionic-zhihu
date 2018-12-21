import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { ChatPage } from "../pages/chat/chat";
import { NewsPage } from "../pages/news/news";
import { FindPage } from "../pages/find/find";
import { MemberPage } from "../pages/member/member";
import { ComponentsModule } from "../components/components.module";
@NgModule({
  declarations: [
    MyApp,
    FindPage,
    HomePage,
    TabsPage,
    ChatPage,
    NewsPage,
    MemberPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), ComponentsModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FindPage,
    HomePage,
    TabsPage,
    ChatPage,
    NewsPage,
    MemberPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
