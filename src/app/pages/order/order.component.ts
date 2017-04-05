import {Component, ElementRef} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { OrderService } from '../../shared/services/order.service'
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import 'style-loader!./smartTables.scss';

@Component({
  selector: 'Order List',
  templateUrl: './order.html',
})

export class Order implements OnInit  {

  order: Order[];
  selectedOrder: Order;
  query: string = '';
 

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      order_code: {
        title: 'Order ID',
        type: 'string'
      },
      customer_name: {
        title: 'Customer Name',
        type: 'string'
      },
       customer: {
        title: 'Customer ID',
        type: 'string'
      },
       contact_name: {
        title: 'Contact Name',
        type: 'string'
      },
      sum_one: {
        title: 'Total Price',
        type: 'Float'
      },
      // Column_4: {
      //   title: 'Project',
      //   type: 'string'
      // },
    }
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
      protected service: OrderService) {
    // this.service.getData().then((data) => {
    //   this.source.load(data);
    // });
    // this.service.getOrder().subscribe(res => {
    //     //alert(JSON.stringify(res.json()));
    //     this.source.load(res.json()["items"]);
    // })
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  getOrder(): void {
    this.OrderService.getOrder().then( => this.order = order);
  }



  onRowSelect(event): void{
    var order_code;
    order_code=event.data.order_code;
    // export const routingDetail = RouterModule.forChild(routes);
     this.router.navigate(['/orderdetail', order_code]);

    
  }
  // onSelect(event) {
  //   this.routingDetail.navigate(['/orderdetail', event.data.order_code]);
  // }
 


}