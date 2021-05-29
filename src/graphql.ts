
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IMutation {
    deleteUnitPosition(id?: string): boolean | Promise<boolean>;
}

export interface IQuery {
    getUnitPosition(): UnitPositionOutput[] | Promise<UnitPositionOutput[]>;
    getUnitPositionById(id?: string): UnitPositionOutput | Promise<UnitPositionOutput>;
}

export interface UnitPositionOutput {
    date_time?: Date;
    unit_id?: number;
    latitude?: number;
    longitude?: number;
    speed?: number;
    bearing?: number;
    hdop?: number;
    satellites?: number;
    created?: Date;
}
