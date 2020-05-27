import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent implements OnInit, OnDestroy {

    constructor() { }

    ngOnInit() {

    }

    ngOnDestroy(): void {
        document.body.className = '';
    }

}
