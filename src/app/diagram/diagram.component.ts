import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DxDiagramComponent, DxDiagramModule} from "devextreme-angular";

@Component({
  selector: 'app-diagram',
  standalone: true,
  imports: [CommonModule, DxDiagramModule],
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.scss',
  preserveWhitespaces: true,
})
export class DiagramComponent {
  @ViewChild(DxDiagramComponent, {static: false}) diagram!: DxDiagramComponent;

}
