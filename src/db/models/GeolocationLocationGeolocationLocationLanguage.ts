import {BelongsTo, Column, CreatedAt, ForeignKey, Model, Table, UpdatedAt} from "sequelize-typescript";
import GeolocationLocationLanguage from "./GeolocationLocationLanguage";
import GeolocationLocation from "./GeolocationLocation";

@Table({
    tableName: 'geolocation_location_geolocation_location_language',
})
export default class GeolocationLocationGeolocationLocationLanguage extends Model<GeolocationLocationGeolocationLocationLanguage> {
    @ForeignKey(() => GeolocationLocation)
    @Column
    geolocation_location_id: number;

    @BelongsTo(() => GeolocationLocation)
    location: GeolocationLocation;

    @ForeignKey(() => GeolocationLocationLanguage)
    @Column
    geolocation_location_language_id: number;

    @BelongsTo(() => GeolocationLocationLanguage)
    language: GeolocationLocationLanguage;

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}
