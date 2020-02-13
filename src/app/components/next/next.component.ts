import { Component, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { QuestComponent } from "src/app/components/quest/quest.component";

@Component({
  selector: "app-next",
  templateUrl: "./next.component.html",
  styleUrls: ["./next.component.scss"]
})
export class NextComponent {
  @Input() step: number;
  button = "Next";

  answer: string;
  question: string;

  constructor(private modal: MatDialog) {}

  openQuest(): void {
    const openQuest = this.modal.open(QuestComponent, {
      width: "250px",
      data: { question: this.question, answer: this.answer }
    });
  }
}
