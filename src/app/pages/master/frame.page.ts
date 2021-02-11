import { Component } from '@angular/core';

@Component({
  selector: 'app-frame-page',
  // 1 renderiza o nav depois o conteudo que vem do router
  template: '<app-navbar></app-navbar><router-outlet></router-outlet>'
})
export class FramePageComponent {

}

