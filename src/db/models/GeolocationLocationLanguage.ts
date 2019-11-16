import {Column, CreatedAt, Model, Table, UpdatedAt} from "sequelize-typescript";

@Table({tableName:'geolocation_location_language'})
export default class GeolocationLocationLanguage extends Model<GeolocationLocationLanguage> {
    @Column
    code: string;

    @Column
    name: string;

    @Column
    native: string;

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}
