import {
  Component,
  ChangeDetectorRef,
  AfterViewInit,
  ElementRef,
  ViewChild
} from "@angular/core";
import { TimelineMax } from "gsap";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.scss"]
})
export class IntroComponent implements AfterViewInit {
  @ViewChild("introEl", { static: false }) introEl: ElementRef;
  @ViewChild("introTextEl", { static: false }) introTextEl: ElementRef;
  introText = "Let the adventure begin";
  isAnimationFinished = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.startAnimation();
  }

  startAnimation() {
    const tl = new TimelineMax({
      onComplete: () => {
        this.isAnimationFinished = true;
        // TODO why the fuck is this necessary
        this.changeDetectorRef.detectChanges();
      }
    });
    tl.to(this.introTextEl.nativeElement.children, {
      duration: 1,
      opacity: 1,
      stagger: 0.05
    });
    tl.to(
      this.introTextEl.nativeElement,
      {
        duration: 1.25,
        scale: 10,
        opacity: 0
      },
      1.3
    );
    tl.to(this.introEl.nativeElement, {
      duration: 0.5,
      opacity: 0
    })
  }
}
