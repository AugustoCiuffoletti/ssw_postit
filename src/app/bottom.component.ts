import { Component, Input } from "@angular/core";

@Component({
  selector: "bottom",
  template: `
    <p>realizzato in {{ name }}!</p>
  `,
  styles: []
})
export class BottomComponent {
  @Input() name: string;
}
