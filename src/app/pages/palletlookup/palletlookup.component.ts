import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {Router} from '@angular/router';

import { PalletLookUpService } from '../../shared/services/palletlookup.service'


import 'style-loader!./smartTables.scss';

@Component({
  selector: 'pallet-lookup',
  templateUrl: './palletlookup.html',
})

export class PalletLookUp implements AfterViewInit{

  inputJob:string="";
  inputBinLocation:string="";
  inputPallet:string="";
  currentRadio: string="";
  codeField:string="";

  markup:string="Default";

  status:string="";
  tableName:string;

  //search by Job
  settings1 = {
    actions: false,
    columns: {
      code: {
        title: 'Location ID',
        type: 'text',
      },
      date: {
        title: 'Pallet ID',
        type: 'text',
      },
    }
  };

  //search by Location
  settings2 = {
    actions: false,
    columns: {
      material: {
        title: 'Pallet',
        type: 'text',
      },
      date: {
        title: 'Job',
        type: 'text',
      },
    }
  };

  //search by Pallet
  settings3 = {
    actions: false,
    columns: {
      material: {
        title: 'Location',
        type: 'text',
      },
      date: {
        title: 'Job',
        type: 'text',
      },
    }
  };


  source1: LocalDataSource = new LocalDataSource();
  source2: LocalDataSource = new LocalDataSource();
  source3: LocalDataSource = new LocalDataSource();
  constructor(private palletlookupservice: PalletLookUpService) {

  }

  ngAfterViewInit(){
    if(screen.width > 420){
          document.getElementsByClassName('widgets')['0'].style.width = '400px';
      }
    }

  radio_stock(event) {    
    this.currentRadio = event.currentTarget.defaultValue;

    if(this.currentRadio=="Job"){
       this.markup="Job for Loc and Pallet";
       // document.getElementById("codeField").placeholder="Job for Loc and Pallet";
     }

    if(this.currentRadio=="Location"){
       this.markup="Loc for Pallet and Job";
       //document.getElementById("codeField").placeholder="Loc for Pallet and Job";
     }

    if(this.currentRadio=="Pallet"){
       this.markup="Pallet for Loc and Job";
       //document.getElementById("codeField").placeholder="Pallet for Loc and Job";
     }
  }


  // check(event){
  //  if(this.currentRadio!=""){
  //    if(this.codeField!=""){ 
  //      if(this.currentRadio=="inputBarcode"){
  //        this.locationlookupservice.getLocationByMaterialId(this.codeField).subscribe(res=>{
  //          if(res.json()["items"][0]["code"]!=" "){
  //            this.source1.load(res.json()["items"]);
  //             document.getElementById('material').style.display = 'block';
  //             document.getElementById('location').style.display = 'none';
  //           }else{
  //             alert("Wrong code id")
  //           }
  //        })
  //      }

  //      if(this.currentRadio=="inputBinLocation"){
  //        this.materialservice.getMaterialIdByLocationId(this.codeField).subscribe(res=>{
  //          if(res.json()["items"][0]["code"]!=" "){
  //            this.source2.load(res.json()["items"]);
  //            document.getElementById('material').style.display = 'none';
  //            document.getElementById('location').style.display = 'block';
  //          }else{
  //             alert("Wrong code id")
  //          }
  //        })
  //      }
  //    }else{
  //      alert("The input field cannot be empty");
  //    }
  //  }else{
  //     alert("Please select input type");
  //  }

  // }

}
