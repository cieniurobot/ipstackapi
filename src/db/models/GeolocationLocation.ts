import {BelongsTo, Column, CreatedAt, ForeignKey, HasMany, Model, Table, UpdatedAt} from "sequelize-typescript";
import Geolocation from "./Geolocation";
import GeolocationLocationGeolocationLocationLanguage from "./GeolocationLocationGeolocationLocationLanguage";

@Table({tableName:'geolocation_location'})
export default class GeolocationLocation extends Model<GeolocationLocation> {
    @Column
    geoname_id: number;

    @Column
    capital: string;

    @Column
    country_flag: string;

    @Column
    country_flag_emoji: string;

    @Column
    country_flag_emoji_unicode: string;

    @Column
    calling_code: string;

    @Column
    is_eu: boolean;

    @ForeignKey(() => Geolocation)
    @Column
    geolocation_id: number;

    @BelongsTo(() => Geolocation)
    geolocation: Geolocation;

    @HasMany(() => GeolocationLocationGeolocationLocationLanguage, {onDelete: 'cascade'})
    languages: GeolocationLocationGeolocationLocationLanguage[];

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}
