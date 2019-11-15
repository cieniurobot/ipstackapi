import {BelongsTo, Column, CreatedAt, ForeignKey, Model, Table, UpdatedAt} from "sequelize-typescript";
import GeolocationLocation from "./GeolocationLocation";

@Table({tableName:'geolocation_location_language'})
export default class GeolocationLocationLanguage extends Model<GeolocationLocationLanguage> {
    @Column
    code: string;

    @Column
    name: string;

    @Column
    native: string;

    @ForeignKey(() => GeolocationLocation)
    @Column
    geolocation_location_id: number;

    @BelongsTo(() => GeolocationLocation)
    geolocation_location: GeolocationLocation;

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}
