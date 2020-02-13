import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { QuestComponent } from "src/app/components/quest/quest.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @ViewChild(QuestComponent, { static: false }) quest: QuestComponent;
  title = "PaperChase";
  step = 1;

  nextQuest() {
    this.step++;
  }
}
