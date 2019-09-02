import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@pages/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  totalProviders: number;
  totalWebsites: number;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.dashboardService.getTotalProviders().subscribe(
      (res: any) => {
        this.totalProviders = res;
      }
    );
    this.dashboardService.getTotalWebsites().subscribe(
      (res: any) => {
        this.totalWebsites = res;
      }
    );
  }

}
