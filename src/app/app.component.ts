import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  nuovo = false;
  nuovoPost = { titolo: "", messaggio: "" };

  postIt = [
    {
      titolo: "auto",
      messaggio: "Appuntamento da Mario per cambiare le gomme il 5 giugno"
    },
    { titolo: "prof", messaggio: "Mandare una mail con le domande" },
    { titolo: "casa", messaggio: "Pagare le spese di condominio entro il 15" },
    { titolo: "medico", messaggio: "050-12365400" }
  ];
  inNuovo() {
    this.nuovo = true;
  }
  nuovaKey(k: string) {
    this.nuovoPost.titolo = k;
  }
  nuovoValue(v: string) {
    this.nuovoPost.messaggio = v;
  }
  salva() {
    this.postIt.push(this.nuovoPost);
    this.nuovo = false;
  }
  annulla() {
    this.nuovoPost = { titolo: "", messaggio: "" };
    this.nuovo = false;
  }
}
