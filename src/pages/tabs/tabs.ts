import { Component } from "@angular/core";
import { HomePage } from "../home/home";
import { ChatPage } from "../chat/chat";
import { NewsPage } from "../news/news";
import { FindPage } from "../find/find";
import { MemberPage } from "../member/member";
@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = FindPage;
  tab3Root = ChatPage;
  tab4Root = NewsPage;
  tab5Root = MemberPage;

  constructor() {}
}
