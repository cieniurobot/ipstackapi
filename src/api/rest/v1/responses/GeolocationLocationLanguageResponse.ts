import GeolocationLocationLanguageResponseInterface from "../interfaces/GeollocationLocationLanguageResponseInterface";
import GeolocationLocationLanguage from "../../../../db/models/GeolocationLocationLanguage";


export default class GeolocationLocationLanguageResponse implements GeolocationLocationLanguageResponseInterface {
    code: string;
    name: string;
    native: string;
    created_at: Date;
    updated_at: Date;

    constructor(attrs: GeolocationLocationLanguage) {
        this.code = attrs.code;
        this.name = attrs.name;
        this.native = attrs.native;
        this.created_at = attrs.created_at;
        this.updated_at = attrs.updated_at;
    }
}
