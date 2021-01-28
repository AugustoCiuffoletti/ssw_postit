import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { BottomComponent } from "./bottom.component";
import { VisualizzaComponent } from "./visualizza/visualizza.component";
import { KvaasService } from './kvaas.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, BottomComponent, VisualizzaComponent],
  bootstrap: [AppComponent],
  providers: [KvaasService]
})
export class AppModule {}
