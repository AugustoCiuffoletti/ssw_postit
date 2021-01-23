import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-visualizza",
  templateUrl: "./visualizza.component.html",
  styleUrls: ["./visualizza.component.css"]
})
export class VisualizzaComponent implements OnInit {
  constructor() {}

  @Input() msg;
  visibile = false;

  mostra() {
    this.visibile = !this.visibile;
  }

  ngOnInit() {
    console.log(JSON.stringify(this.msg));
  }
}
