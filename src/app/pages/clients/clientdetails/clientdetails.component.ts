import 'rxjs/add/operator/switchMap';

import {Component, ElementRef} from '@angular/core';

import { Location } from '@angular/common';

import { ActivatedRoute, Params } from '@angular/router';

import { ClientService } from '../../../shared/services/client.service';

import * as GoogleMapsLoader from 'google-maps';

@Component({
  selector: 'client-details',
  templateUrl: './clientdetails.html',
})

export class ClientDetails {
	constructor(private route: ActivatedRoute, private location: Location, private service: ClientService, private _elementRef:ElementRef) {
		
	}

	ngOnInit() {
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
		});
	}

	ngAfterViewInit() {
	    let el = this._elementRef.nativeElement.querySelector('.google-maps');

	    // TODO: do not load this each time as we already have the library after first attempt
	    GoogleMapsLoader.load((google) => {
	      new google.maps.Map(el, {
	        center: new google.maps.LatLng(44.5403, -78.5463),
	        zoom: 8,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	      });
    });
  }

}
