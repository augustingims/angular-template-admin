import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html'
})
export class UiComponent implements OnInit, OnDestroy {

  constructor( ) { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition skin-green sidebar-mini';
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

}
