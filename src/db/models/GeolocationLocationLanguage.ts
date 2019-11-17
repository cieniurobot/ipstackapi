import {BelongsToMany, Column, CreatedAt, Model, Table, UpdatedAt} from "sequelize-typescript";
import GeolocationLocation from "./GeolocationLocation";
import GeolocationLocationGeolocationLocationLanguage from "./GeolocationLocationGeolocationLocationLanguage";

@Table({tableName: 'g_location_language'})
export default class GeolocationLocationLanguage extends Model<GeolocationLocationLanguage> {
    @Column
    code: string;

    @Column
    name: string;

    @Column
    native: string;

    @BelongsToMany(() => GeolocationLocation, () => GeolocationLocationGeolocationLocationLanguage)
    location: GeolocationLocation[];

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}
