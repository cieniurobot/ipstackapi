import GeolocationLocationRequestInterface from "../interfaces/GeolocationLocationRequestInterface";

export default class GeolocationLocationRequest implements GeolocationLocationRequestInterface {
    id: number;
    geoname_id: number;
    capital: string;
    languages_ids: number[];
    country_flag: string;
    country_flag_emoji: string;
    country_flag_emoji_unicode: string;
    calling_code: string;
    is_eu: boolean;

    constructor(attrs: GeolocationLocationRequestInterface) {
        this.id = attrs.id;
        this.geoname_id = attrs.geoname_id;
        this.capital = attrs.capital;
        this.languages_ids = attrs.languages_ids;
        this.country_flag = attrs.country_flag;
        this.country_flag_emoji = attrs.country_flag_emoji;
        this.country_flag_emoji_unicode = attrs.country_flag_emoji_unicode;
        this.calling_code = attrs.calling_code;
        this.is_eu = attrs.is_eu;
    }
}
