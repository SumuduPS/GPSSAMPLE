
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface UnitPositionInput {
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

export interface UnitPowerInput {
    date_time?: Date;
    unit_id?: number;
    main?: number;
    solar?: number;
    micro?: number;
    created?: Date;
}

export interface UnitStatusInput {
    date_time?: Date;
    unit_id?: number;
    msg_type?: number;
    msg?: string;
    created?: Date;
}

export interface IMutation {
    addUnitPosition(unitPositionInput?: UnitPositionInput): UnitPositionOutput | Promise<UnitPositionOutput>;
    addUnitPower(unitPositionInput?: UnitPowerInput): UnitPowerOutput | Promise<UnitPowerOutput>;
    addUnitStatus(unitStatusInput?: UnitStatusInput): UnitStatusOutput | Promise<UnitStatusOutput>;
}

export interface IQuery {
    getUnitPosition(): UnitPositionOutput[] | Promise<UnitPositionOutput[]>;
    getUnitPower(): UnitPowerOutput[] | Promise<UnitPowerOutput[]>;
    getUnitStatus(): UnitStatusOutput[] | Promise<UnitStatusOutput[]>;
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

export interface UnitPowerOutput {
    date_time?: Date;
    unit_id?: number;
    main?: number;
    solar?: number;
    micro?: number;
    created?: Date;
}

export interface UnitStatusOutput {
    date_time?: Date;
    unit_id?: number;
    msg_type?: number;
    msg?: string;
    created?: Date;
}
