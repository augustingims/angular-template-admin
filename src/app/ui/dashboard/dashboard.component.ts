import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dashboard, IDashboard} from '../../shared';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  dashboard: IDashboard = new Dashboard();

  constructor( ) { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition skin-green sidebar-mini';
  }

  ngOnDestroy(): void {
      document.body.className = '';
  }

}
