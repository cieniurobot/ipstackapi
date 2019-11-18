import logger from "../../logger";
import Geolocation from "../models/Geolocation";
import GeolocationLocation from "../models/GeolocationLocation";
import GeolocationLocationLanguage from "../models/GeolocationLocationLanguage";
import GeolocationRequest from "../../api/rest/v1/requests/GeolocationRequest";

export default class GeolocationRepository {

    private async setGeolocationLocationLanguages(geolocation: Geolocation, ids: Array<number>): Promise<Geolocation> {
        if (!ids) {
            return geolocation;
        }
        await geolocation.location.$set('languages', ids);
        return geolocation;
    }

    async create(geolocationRequest: GeolocationRequest) {
        logger.debug(`data: ${JSON.stringify(geolocationRequest)}`);
        try {
            const geolocation = await Geolocation.create(geolocationRequest, {
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
            const geolocationWithLanguages = await this.setGeolocationLocationLanguages(geolocation, geolocationRequest.location.languages_ids);

            return await geolocationWithLanguages.reload();
        } catch (e) {
            logger.error(e.message);
            throw e;
        }
    }

    async update(geolocation: Geolocation, geolocationRequest: GeolocationRequest) {
        try {
            geolocation.ip = geolocationRequest.ip;
            geolocation.type = geolocationRequest.type;
            geolocation.continent_code = geolocationRequest.continent_code;
            geolocation.continent_name = geolocationRequest.continent_name;
            geolocation.country_code = geolocationRequest.country_code;
            geolocation.country_name = geolocationRequest.country_name;
            geolocation.region_code = geolocationRequest.region_code;
            geolocation.region_name = geolocationRequest.region_name;
            geolocation.city = geolocationRequest.city;
            geolocation.zip = geolocationRequest.zip;
            geolocation.latitude = geolocationRequest.latitude;
            geolocation.longitude = geolocationRequest.longitude;
            const newLocation = geolocation.location;
            newLocation.geoname_id = geolocationRequest.location.geoname_id;
            newLocation.capital = geolocationRequest.location.capital;
            newLocation.country_flag = geolocationRequest.location.country_flag;
            newLocation.country_flag_emoji = geolocationRequest.location.country_flag_emoji;
            newLocation.country_flag_emoji_unicode = geolocationRequest.location.country_flag_emoji_unicode;
            newLocation.calling_code = geolocationRequest.location.calling_code;
            newLocation.is_eu = geolocationRequest.location.is_eu;
            await newLocation.save();
            await newLocation.$set('languages', geolocationRequest.location.languages_ids);
            await geolocation.$set('location', newLocation);

            return await geolocation.save();
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
                                model: GeolocationLocationLanguage,
                                as: 'languages'
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

    async findOneFullByIp(ip: string): Promise<Geolocation> {
        try {
            const geolocation = await Geolocation.findOne({
                where: {
                    ip: ip
                },
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

            return geolocation;
        } catch (e) {
            logger.error(e.message);
            throw e;
        }
    }
}
