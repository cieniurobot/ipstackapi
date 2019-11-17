import {Column, CreatedAt, DataType, HasOne, Model, Table, UpdatedAt} from "sequelize-typescript";
import GeolocationLocation from "./GeolocationLocation";

@Table({tableName:'geolocation'})
export default class Geolocation extends Model<Geolocation> {
    @Column
    ip: string;

    @Column
    type: string;

    @Column
    continent_code: string;

    @Column
    continent_name: string;

    @Column
    country_code: string;

    @Column
    country_name: string;

    @Column
    region_code: string;

    @Column
    region_name: string;

    @Column
    city: string;

    @Column
    zip: string;

    @Column({
        type: DataType.DECIMAL(10, 8)
    })
    latitude: number;

    @Column({
        type: DataType.DECIMAL(10, 8)
    })
    longitude: number;

    @HasOne(() => GeolocationLocation, {onDelete: 'cascade'})
    location: GeolocationLocation;

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}
