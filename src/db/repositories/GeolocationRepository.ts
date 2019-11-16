import Geolocation from "../models/Geolocation";
import GeolocationLocation from "../models/GeolocationLocation";
import GeolocationLocationLanguage from "../models/GeolocationLocationLanguage";
import GeolocationLocationGeolocationLocationLanguage from "../models/GeolocationLocationGeolocationLocationLanguage";
import logger from "../../logger";

export default class GeolocationRepository {
    async getByPk(id: number): Promise<Geolocation> {
        try {
            const geolocation = await Geolocation.findByPk(id, {
                include: [
                    {
                        model: GeolocationLocation,
                        as: 'location',
                        include: [
                            {
                                model: GeolocationLocationGeolocationLocationLanguage,
                                as: 'languages',
                                include: [
                                    {
                                        model: GeolocationLocationLanguage,
                                        as: 'language'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });

            return geolocation;
        } catch (e) {
            logger.error(e.message);
            throw e;
        }
    }
}
