import {Column, CreatedAt, ForeignKey, Model, Table, UpdatedAt} from "sequelize-typescript";
import GeolocationLocationLanguage from "./GeolocationLocationLanguage";
import GeolocationLocation from "./GeolocationLocation";

@Table({
    tableName: 'g_location_gl_language',
})
export default class GeolocationLocationGeolocationLocationLanguage extends Model<GeolocationLocationGeolocationLocationLanguage> {
    @ForeignKey(() => GeolocationLocation)
    @Column
    gl_id: number;

    @ForeignKey(() => GeolocationLocationLanguage)
    @Column
    gll_id: number;

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}
