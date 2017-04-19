import 'rxjs/add/operator/switchMap';

import {Component, ElementRef} from '@angular/core';

import { Location } from '@angular/common';

import { ActivatedRoute, Params } from '@angular/router';

import { ClientService } from '../../../shared/services/client.service';
		
import { ChartistJsService } from './chartistJs.service';

import 'style-loader!./chartistJs.scss';

import * as GoogleMapsLoader from 'google-maps';

import * as Chartist from 'chartist';

@Component({
	selector: 'client-details',
	styleUrls: ['./googleMaps.scss'],
	templateUrl: './clientdetails.html',
})

export class ClientDetails {

	data:any;

	constructor(private route: ActivatedRoute, private location: Location, private service: ClientService, private _elementRef:ElementRef, private _chartistJsService:ChartistJsService) {
		//loadMap();	
	}

	ngOnInit() {
		this.route.params
		.switchMap((params: Params) => this.service.getClientInvoices(params['id']))
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
			new Chartist.Bar('.ct-chart', {
				labels: labels,
				series: allYear
			});

		});
		//this.data = this._chartistJsService.getAll();
	}

	ngAfterViewInit() {
		let el = this._elementRef.nativeElement.querySelector('.google-maps');
		this.route.params
		.switchMap((params: Params) => this.service.getClientDetails(params['id']))
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
