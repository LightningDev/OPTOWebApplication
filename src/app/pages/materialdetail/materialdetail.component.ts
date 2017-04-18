import {Component, ElementRef} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { MaterialService } from '../../shared/services/material.service'

import {Router,ActivatedRoute, Params} from '@angular/router';


import 'style-loader!./smartTables.scss';

@Component({
  selector: 'Material Detail',
  templateUrl: './materialdetail.html',
})

export class MaterialDetail {

  query: string = '';
  code: string ='';

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
      ID: {
        title: 'Material ID',
        type: 'string'
      },
      cash_p_m: {
        title: 'Price',
        type: 'string'
      },
      description: {
        title: 'Description',
        type: 'string'
      },
   
      stock: {
        title: 'Stock',
        type: 'string'
      },
      // Column_3: {
      //   title: 'Part Group',
      //   type: 'string'
      // },
      // Column_4: {
      //   title: 'Material Group',
      //   type: 'string'
      // },
      // Column_5: {
      //   title: 'Stock',
      //   type: 'number'
      // }
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
    //private router:Router, 
    private route:ActivatedRoute,
    protected service: MaterialService) {
    // this.service.getData().then((data) => {
    //   this.source.load(data);
    // });

    this.route.params.subscribe(params => {
            this.code = params["code"];});
debugger;
    // this.service.getMaterialDetails(this.code).subscribe(res => {
    //     //alert(JSON.stringify(res.json()));
    //     this.source.load(res.json()["items"]);
    //   });

    this.service.getMaterialDetails(this.code).subscribe(res => {
      this.inputMaterialID = res.json()["items"][0]["ID"];
      this.inputMaterialDescription = res.json()["items"][0]["description"];
      this.inputMaterialPrice = res.json()["items"][0]["cash_p_m"];
      this.inputMaterialStock = res.json()["items"][0]["stock"];
      debugger;
     
    });
  
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  // onRowSelect(event): void{
  //   debugger;
  //   this.router.navigate(['pages/materialslist', event.data.code]);    
  // }
}