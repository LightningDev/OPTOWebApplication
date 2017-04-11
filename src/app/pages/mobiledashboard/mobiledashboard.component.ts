import {Component, ElementRef} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import {Router,ActivatedRoute, Params} from '@angular/router';
// import 'style-loader!./smartTables.scss';

@Component({
  selector: 'Mobile Dashboard',
  templateUrl: './mobiledashboard.html',
})

export class MobileDashboard {

  query: string = '';

  settings = {
    
  };

    metricsTableData = [
    {
      image: 'app/browsers/chrome.svg',
      browser: 'Google Chrome',
      visits: '10,392',
      isVisitsUp: true,
      purchases: '4,214',
      isPurchasesUp: true,
      percent: '45%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/firefox.svg',
      browser: 'Mozilla Firefox',
      visits: '7,873',
      isVisitsUp: true,
      purchases: '3,031',
      isPurchasesUp: false,
      percent: '28%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/ie.svg',
      browser: 'Internet Explorer',
      visits: '5,890',
      isVisitsUp: false,
      purchases: '2,102',
      isPurchasesUp: false,
      percent: '17%',
      isPercentUp: false
    },
    {
      image: 'app/browsers/safari.svg',
      browser: 'Safari',
      visits: '4,001',
      isVisitsUp: false,
      purchases: '1,001',
      isPurchasesUp: false,
      percent: '14%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/opera.svg',
      browser: 'Opera',
      visits: '1,833',
      isVisitsUp: true,
      purchases: '83',
      isPurchasesUp: true,
      percent: '5%',
      isPercentUp: false
    }
  ];

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private router:Router,
    private route:ActivatedRoute) {
    // this.service.getData().then((data) => {
    //   this.source.load(data);
    // });

    // this.route.params.subscribe(params => {
    //         this.id = +params['id'];});
 
    // this.service.getOrderDetail(this.id).subscribe(res => {
    //     //alert(JSON.stringify(res.json()));
    //     this.source.load(res.json()["items"]);
    // });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }


}