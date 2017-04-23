import 'rxjs/add/operator/switchMap';

import {Component, ElementRef} from '@angular/core';

import { Location } from '@angular/common';

import { LocalDataSource } from 'ng2-smart-table';

import { ActivatedRoute, Params } from '@angular/router';

import { ClientService } from '../../../shared/services/client.service';

import { PartService } from '../../../shared/services/part.service';
import { OrderService } from '../../../shared/services/order.service';
import { MaterialService } from '../../../shared/services/material.service';

import { ChartistJsService } from './chartistJs.service';

import 'style-loader!./chartistJs.scss';

import 'style-loader!../smartTables.scss';

import * as GoogleMapsLoader from 'google-maps';

import * as Chartist from 'chartist';

@Component({
	selector: 'client-details',
	styleUrls: ['./googleMaps.scss'],
	templateUrl: './clientdetails.html',
})

export class ClientDetails {

	data:any;
	query: string = '';

	settings1 = {
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
			code: {
				title: 'Code',
				type: 'string',
			},
			cust_part_no: {
				title: 'Part Number',
				type: 'string',
			},
			drawing_no: {
				title: 'Drawing Number',
				type: 'string'
			},
			part_description: {
				title: 'Description',
				type: 'string',
			},
			unit: {
				title: 'Unit',
				type: 'string',
			}
		}
	};

	settings2 = {
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
			contact_name: {
				title: 'Contact Name',
				type: 'string',
			},
			customer: {
				title: 'Customer Code',
				type: 'string',
			},
			customer_name: {
				title: 'Customer Name',
				type: 'string'
			},
			order_code: {
				title: 'Order Code',
				type: 'string',
			}
			sum_one: {
				title: 'Price',
				type: 'string',
			}
		}
	};
	
	settings3 = {
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
			client_code: {
				title: 'Client Code',
				type: 'string',
			},
			client_name: {
				title: 'Client Name',
				type: 'string',
			},
			e_mail: {
				title: 'Email',
				type: 'string'
			},
			state: {
				title: 'State',
				type: 'string',
			}
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
	source1: LocalDataSource = new LocalDataSource();
	source2: LocalDataSource = new LocalDataSource();
	source3: LocalDataSource = new LocalDataSource();

	constructor(
		private route: ActivatedRoute, 
		private location: Location,
		private order_service: OrderService,
		private material_service: MaterialService,
		private part_service: PartService, 
		private client_service: ClientService,
		private _elementRef:ElementRef, 
		private _chartistJsService:ChartistJsService) {
		//loadMap();	
		// /*
		// //
		// //Get param value
		// */
		

		// this.client_service.getClientDetails(this.id).subscribe(res => {
		// 	//alert(JSON.stringify(res.json()));
		// 	this.source.load(res.json()["items"][0]);
		// });

}

ngOnInit() {
	this.route.params
	.switchMap((params: Params) => this.client_service.getClientInvoices(params['id']))
	.subscribe(res => {
		var items = res.json()["items"];
		var year1 = [];
		var year2 = [];
		var year3 = [];
		var year4 = [];
		var labels = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"];
		for(var _i = 0; _i < items.length; _i++) {
			let item = items[_i];
			if (item["y"] == 1) {
				year1.push(item["total"])
			} else if (item["y"] == 2) {
				year2.push(item["total"])
			} else if (item["y"] == 3) {
				year3.push(item["total"])
			} else {
				year4.push(item["total"])
			}
		}
		var allYear = [year1, year2, year3, year4];
		new Chartist.Line('.ct-chart', {
			labels: labels,
			series: allYear
		});

	});

	this.route.params.subscribe(params => {
			this.id = params['id'];});

	
	this.part_service.getPartByClientId(this.id).subscribe(res=> {
		if(res.json()["items"][0]["code"]!=" "){
			//console.log("abc");
		this.source1.load(res.json()["items"]);
		}else{
			//console.log("xyz");
		}
	})

	this.order_service.getOrderByClientId(this.id).subscribe(res=> {
		if(res.json()["items"][0]["order_code"]!=" "){
			//console.log("abc");
		this.source2.load(res.json()["items"]);
		}else{
			//console.log("xyz");
		}
	})

	this.material_service.getMaterialByClientId(this.id).subscribe(res => {
		if(res.json()["items"][0]["ID"]!=" "){
			//console.log("abc");
		this.source3.load(res.json()["items"]);
		}else{
			//console.log("xyz");
		}
	})

	

	//this.data = this._chartistJsService.getAll();
}

ngAfterViewInit() {
	let el = this._elementRef.nativeElement.querySelector('.google-maps');
	this.route.params
	.switchMap((params: Params) => this.client_service.getClientDetails(params['id']))
	.subscribe(res => {
		this.inputClientCode = res.json()["items"][0]["client_code"];
		this.inputClientName = res.json()["items"][0]["client_name"];
		this.inputEmail = res.json()["items"][0]["e_mail"];
		this.inputWebsite = res.json()["items"][0]["web_site"];
		this.inputPostalAddress1 = res.json()["items"][0]["address1"];
		this.inputDeliveryAddress1 = res.json()["items"][0]["postal_address1"];
		this.inputPostalAddress2 = res.json()["items"][0]["address2"];
		this.inputDeliveryAddress2 = res.json()["items"][0]["postal_address2"];
		this.inputPostalCity = res.json()["items"][0]["city"];
		this.inputDeliveryCity = res.json()["items"][0]["postal_city"];
		this.inputPostalState = res.json()["items"][0]["state"];
		this.inputDeliveryState = res.json()["items"][0]["state"];
		this.inputPostalPostcode = res.json()["items"][0]["postcode"];
		this.inputDeliveryPostcode = res.json()["items"][0]["postal_postcode"];

		// Address
		var address = res.json()["items"][0]["address1"] + "," + res.json()["items"][0]["address2"] + "," + res.json()["items"][0]["city"] + "," + res.json()["items"][0]["state"];

		// Load Google Map
		loadGoogleMap(el, address);
	});
}

function loadGoogleMap(el, address) {
	GoogleMapsLoader.load((google) => {
		var map = new google.maps.Map(el, {
			center: new google.maps.LatLng(-26.9968449, 153.3178702),
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});
		var geocoder = new google.maps.Geocoder();
		geocodeAddress(geocoder, map, address);
	});
}

function geocodeAddress(geocoder, resultsMap, address) {
	geocoder.geocode({'address': address}, function(results, status) {
		if (status === 'OK') {
			resultsMap.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				map: resultsMap,
				position: results[0].geometry.location
			});
		} else {
			alert('Geocode was not successful for the following reason: ' + status);
		}
	});
}

}
