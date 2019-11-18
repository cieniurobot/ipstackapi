import GeolocationLocationResponseInterface from "../interfaces/GeolocationLocationResponseInterface";
import GeolocationLocationResponse from "./GeolocationLocationResponse";
import Geolocation from "../../../../db/models/Geolocation";
import GeolocationResponseInterface from "../interfaces/GeolocationResponseInterface";


export default class GeolocationResponse implements GeolocationResponseInterface {
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
    location: GeolocationLocationResponseInterface;
    created_at: Date;
    updated_at: Date;

    constructor(attrs: Geolocation) {
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
        this.location = new GeolocationLocationResponse(attrs.location);
        this.created_at = attrs.created_at;
        this.updated_at = attrs.updated_at;
    }
}
