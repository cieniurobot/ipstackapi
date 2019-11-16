import GeolocationLocationResponseInterface from "./GeolocationLocationResponseInterface";

export default interface GeolocationResponseInterface {
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
    longtitude: number;
    location: GeolocationLocationResponseInterface;
    created_at: Date;
    updated_at: Date;
}
