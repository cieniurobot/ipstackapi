import GeolocationLocationResponseInterface from "../interfaces/GeolocationLocationResponseInterface";
import GeolocationLocationLanguageResponseInterface from "../interfaces/GeollocationLocationLanguageResponseInterface";
import GeolocationLocation from "../../../../db/models/GeolocationLocation";
import GeolocationLocationLanguageResponse from "./GeolocationLocationLanguageResponse";
import GeolocationLocationLanguage from "../../../../db/models/GeolocationLocationLanguage";


export default class GeolocationLocationResponse implements GeolocationLocationResponseInterface {
    geoname_id: number;
    capital: string;
    country_flag: string;
    country_flag_emoji: string;
    country_flag_emoji_unicode: string;
    calling_code: string;
    is_eu: boolean;
    languages: GeolocationLocationLanguageResponseInterface[];
    created_at: Date;
    updated_at: Date;

    constructor(attrs: GeolocationLocation) {
        this.geoname_id = attrs.geoname_id;
        this.capital = attrs.capital;
        this.country_flag = attrs.country_flag;
        this.country_flag_emoji = attrs.country_flag_emoji;
        this.country_flag_emoji_unicode = attrs.country_flag_emoji_unicode;
        this.calling_code = attrs.calling_code;
        this.is_eu = attrs.is_eu;
        this.languages = this.mapLanguagesToResponses(attrs.languages);
    }

    mapLanguagesToResponses(languages: GeolocationLocationLanguage[]): Array<GeolocationLocationLanguageResponse> {
        if (!languages) {
            return [];
        }

        return languages.map((item) => {
            return new GeolocationLocationLanguageResponse(item);
        });
    }
}
