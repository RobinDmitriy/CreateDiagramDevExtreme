import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';

import ruMessages from "devextreme/localization/messages/ru.json";
import {loadMessages, locale} from "devextreme/localization";
import {DiagramComponent} from "./diagram/diagram.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DiagramComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CreateDiagramDevExtreme';

  constructor() {
    loadMessages(ruMessages);
    locale(navigator.language);
  }
}
