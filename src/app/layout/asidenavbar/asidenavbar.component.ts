import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-asidenavbar',
  templateUrl: './asidenavbar.component.html',
  styleUrls: ['./asidenavbar.component.scss']
})
export class AsidenavbarComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $(() => {
            $('.my-menu').tree({
                animationSpeed: 500,
                accordion     : true,
                followLink    : false,
                trigger       : '.treeview a'
            });
        });
    }

}
