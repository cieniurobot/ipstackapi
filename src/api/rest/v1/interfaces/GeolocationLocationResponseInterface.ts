import GeolocationLocationLanguageResponseInterface from "./GeollocationLocationLanguageResponseInterface";

export default interface GeolocationLocationResponseInterface {
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
}
