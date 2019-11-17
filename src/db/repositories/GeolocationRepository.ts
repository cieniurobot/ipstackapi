import logger from "../../logger";
import Geolocation from "../models/Geolocation";
import GeolocationLocation from "../models/GeolocationLocation";
import GeolocationLocationLanguage from "../models/GeolocationLocationLanguage";
import GeolocationLocationGeolocationLocationLanguage from "../models/GeolocationLocationGeolocationLocationLanguage";
import GeolocationRequest from "../../api/rest/v1/requests/GeolocationRequest";

export default class GeolocationRepository {

    private async addGeolocationLocationLanguages(geolocation: Geolocation, ids: Array<number>): Promise<Geolocation> {
        if (!ids) {
            return geolocation;
        }
        await geolocation.location.$add('languages', ids);
        return geolocation;
    }

    async create(data: GeolocationRequest) {
        logger.debug(`data: ${JSON.stringify(data)}`);
        try {
            const geolocation = await Geolocation.create(data, {
                include: [
                    {
                        model: GeolocationLocation,
                        as: 'location',
                        include: [
                            {
                                model: GeolocationLocationLanguage,
                                as: 'languages'
                            }
                        ]
                    }
                ]
            });
            const geolocationWithLanguages = await this.addGeolocationLocationLanguages(geolocation, data.location.languages_ids);

            return await geolocationWithLanguages.reload();
        } catch (e) {
            logger.error(e.message);
            throw e;
        }
    }

    async findFullByPk(id: number): Promise<Geolocation> {
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
