import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {

  private graph!: mxGraph;

  @ViewChild('container', { read: ElementRef, static: true })
  public container!: ElementRef<HTMLElement>;

  public ngOnInit() {
    this.graph = new mxGraph(this.container.nativeElement);
    this.graph.getModel().beginUpdate();
    try {
      const parent = this.graph.getDefaultParent();
      const angularVertex = this.graph.insertVertex(parent, "v1", 'Angualr', 100, 100, 100, 62)
      const mxGraphVertex = this.graph.insertVertex(parent, "v2", 'mxGraph', 300, 300, 100, 62)
      this.graph.insertEdge(parent, "e1", 'with', angularVertex, mxGraphVertex);
    } finally {
      this.graph.getModel().endUpdate();
    }
  }


}
 