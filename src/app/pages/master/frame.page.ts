import { Component } from '@angular/core';

@Component({
  selector: 'app-frame-page',
  // tslint:disable-next-line:comment-format
  //1 renderiza o nav depois o conteudo que vem do router
  template: '<app-navbar></app-navbar><router-outlet></router-outlet>'
})
// tslint:disable-next-line:eofline
export class FramePageComponent { }