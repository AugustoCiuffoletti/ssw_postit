import { Component, VERSION } from "@angular/core";
import { KvaasService } from "./kvaas.service";

export interface aPost { titolo: string; messaggio: string }; 

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  nuovo = false;
  nuovoPost = { titolo: "", messaggio: "" };

  postIt = [ //verrà riscritto con i ldownload
    {
      titolo: "auto",
      messaggio: "Appuntamento da Mario per cambiare le gomme il 5 giugno"
    },
    { titolo: "prof", messaggio: "Mandare una mail con le domande" },
    { titolo: "casa", messaggio: "Pagare le spese di condominio entro il 15" },
    { titolo: "medico", messaggio: "050-12365422" }
  ]; 
  
  res = this.kvaas
    .getvalue()
    .subscribe(
      x => (this.postIt = x),
      err => console.error("Observer got an error: " + err)
    );
  
  constructor(private kvaas: KvaasService) {}

  inNuovo() {
    this.nuovo = true;
  }
  nuovaKey(k: string) {
    this.nuovoPost.titolo = k;
  }
  nuovoValue(v: string) {
    this.nuovoPost.messaggio = v;
  }
  cancella(t: string) {
    this.postIt.splice(this.postIt.findIndex(({titolo}) => titolo == t), 1);
  }
  salva() {
    this.postIt.push(this.nuovoPost);
    this.nuovo = false;
  }
  upLoad() {
    this.res = this.kvaas.
      postvalue(this.postIt)
      .subscribe(
        x => (console.log(x) ),
        err => console.error("Observer got an error: " + err)
      );
  }
  annulla() {
    this.nuovoPost = { titolo: "", messaggio: "" };
    this.nuovo = false;
  }
}
