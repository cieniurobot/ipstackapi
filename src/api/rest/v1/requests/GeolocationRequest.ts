import GeolocationRequestInterface from "../interfaces/GeolocationRequestInterface";
import GeolocationLocationRequestInterface from "../interfaces/GeolocationLocationRequestInterface";
import GeolocationLocationRequest from "./GeolocationLocationRequest";

export default class GeolocationRequest implements GeolocationRequestInterface {
    ip: string;
    type: string;
    continent_code: string;
    continent_name: string;
    country_code: string;
    country_name: string;
    region_code: string;
    region_name: string;
    city: string;
    zip: string;
    latitude: number;
    longitude: number;
    location: GeolocationLocationRequestInterface;

    constructor(attrs: GeolocationRequestInterface) {
        this.ip = attrs.ip;
        this.type = attrs.type;
        this.continent_code = attrs.continent_code;
        this.continent_name = attrs.continent_name;
        this.country_code = attrs.country_code;
        this.country_name = attrs.country_name;
        this.region_code = attrs.region_code;
        this.region_name = attrs.region_name;
        this.city = attrs.city;
        this.zip = attrs.zip;
        this.latitude = attrs.latitude;
        this.longitude = attrs.longitude;
        this.location = new GeolocationLocationRequest(attrs.location);
    }
}
