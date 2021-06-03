
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface UnitMapInput {
    id?: number;
    version?: number;
    poly_j?: string;
    poly_t?: Upload;
}

export interface UnitPositionInput {
    date_time?: Date;
    unit_id?: number;
    latitude?: number;
    longitude?: number;
    speed?: number;
    bearing?: number;
    hdop?: number;
    satellites?: number;
}

export interface UnitPowerInput {
    date_time?: Date;
    unit_id?: number;
    main?: number;
    solar?: number;
    micro?: number;
}

export interface UnitStatusInput {
    date_time?: Date;
    unit_id?: number;
    msg_type?: number;
    msg?: string;
}

export interface UnitMapOutput {
    id?: number;
    version?: number;
    poly_j?: string;
    poly_t?: string;
    created?: Date;
}

export interface IQuery {
    getUnitMap(): UnitMapOutput[] | Promise<UnitMapOutput[]>;
    getUnitPosition(): UnitPositionOutput[] | Promise<UnitPositionOutput[]>;
    getUnitPositionById(unit_id?: number, date_time?: Date): UnitPositionOutput[] | Promise<UnitPositionOutput[]>;
    getUnitPower(): UnitPowerOutput[] | Promise<UnitPowerOutput[]>;
    getUnitPowerById(unit_id?: number, date_time?: Date): UnitPowerOutput[] | Promise<UnitPowerOutput[]>;
    getUnitStatus(): UnitStatusOutput[] | Promise<UnitStatusOutput[]>;
    getUnitStatusById(unit_id?: number, date_time?: Date): UnitStatusOutput[] | Promise<UnitStatusOutput[]>;
}

export interface IMutation {
    addUnitMap(unitMapInput?: UnitMapInput): UnitMapOutput | Promise<UnitMapOutput>;
    addUnitPosition(unitPositionInput?: UnitPositionInput): string | Promise<string>;
    updateUnitPosition(unitPositionInput?: UnitPositionInput): string | Promise<string>;
    deleteUnitPosition(unit_id?: number, date_time?: Date): boolean | Promise<boolean>;
    addUnitPower(unitPowerInput?: UnitPowerInput): string | Promise<string>;
    updateUnitPower(unitPowerInput?: UnitPowerInput): string | Promise<string>;
    deleteUnitPower(unit_id?: number, date_time?: Date): boolean | Promise<boolean>;
    addUnitStatus(unitStatusInput?: UnitStatusInput): string | Promise<string>;
    updateUnitStatus(unitStatusInput?: UnitStatusInput): string | Promise<string>;
    deleteUnitStatus(unit_id?: number, date_time?: Date): boolean | Promise<boolean>;
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

export type Upload = any;
