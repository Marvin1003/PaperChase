import {
  Component,
  Inject,
  Input,
  ViewChild,
  ElementRef,
  OnInit
} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { TweenMax } from "gsap";
import quests from "src/assets/data/quests.json";

export interface QuestData {
  question: string;
  answer: string;
}

@Component({
  selector: "app-quest",
  templateUrl: "./quest.component.html",
  styleUrls: ["./quest.component.scss"]
})
export class QuestComponent implements OnInit {
  @ViewChild("quest", { static: false }) questEl: ElementRef;
  @Input() step: number;
  activeQuest: string;
  submit = "Submit";

  constructor(
    public dialogRef: MatDialogRef<QuestData>,
    @Inject(MAT_DIALOG_DATA) public data: QuestData
  ) {}

  ngOnInit() {
    this.activeQuest = quests[this.step - 1].question;
  }

  showQuest() {
    TweenMax.to(this.questEl.nativeElement, { opacity: 1, duration: 1 });
  }

  answerQuest() {}
}
