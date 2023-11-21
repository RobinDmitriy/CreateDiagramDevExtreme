import {Component, inject, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DxDiagramComponent, DxDiagramModule, DxFileUploaderModule} from "devextreme-angular";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-diagram',
  standalone: true,
  imports: [CommonModule, DxDiagramModule, DxFileUploaderModule],
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.scss',
  preserveWhitespaces: true,
})
export class DiagramComponent {
  @ViewChild(DxDiagramComponent, {static: false}) diagram!: DxDiagramComponent;

  private http = inject(HttpClient);

  onCustomCommand(e: any) {
    if (e.name === 'load') {
      this.loadDiagramFile();
    }
    if (e.name === 'save') {
      const diagramData = this.diagram.instance.export();
      window.open("data:application/json;charset=UTF-8," + encodeURIComponent(diagramData), "_blank");
    }
  }

  loadData(filename: string) {
    console.log(filename);
    setTimeout(() => {
      this.http.get('assets/'.concat(filename)).subscribe((data) => {
        this.diagram.instance.import(JSON.stringify(data));
      }, (err) => {
        throw 'При загрузке файла возникла ошибка!';
      });
    }, 500);
  }

  private loadDiagramFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';

    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (file) {
        this.loadData(file.name);
      }
    };
    input.click();
  }

}
