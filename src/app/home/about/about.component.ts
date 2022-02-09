/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/

import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private graph!: mxGraph;

  @ViewChild('container', { read: ElementRef, static: true })
  public container!: ElementRef<HTMLElement>;

  public ngOnInit() {
   /* this.graph = new mxGraph(this.container.nativeElement);
    this.graph.getModel().beginUpdate();
    try {
      const parent = this.graph.getDefaultParent();
      const angularVertex = this.graph.insertVertex(parent, "v1", 'Angualr', 100, 100, 100, 62)
      const mxGraphVertex = this.graph.insertVertex(parent, "v2", 'mxGraph', 300, 300, 100, 62)
      this.graph.insertEdge(parent, "e1", 'with', angularVertex, mxGraphVertex);
    } finally {
      this.graph.getModel().endUpdate();
    }*/
  }

}

