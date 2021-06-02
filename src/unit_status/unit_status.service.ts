import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UnitStatus } from './unit_status.entity';
import {UnitStatusOutput} from '../graphql';
import {UnitStatusInput} from '../graphql'; 


@Injectable()
export class UnitStatusService {
  constructor(
    @InjectRepository(UnitStatus)
    private readonly unitStatusRepository: Repository<UnitStatus>,
  ) {}

  async getUnitStatus(): Promise<UnitStatusOutput[]> {
    return await this.unitStatusRepository.find();
  }

  async getUnitStatusById(unit_id:number,date_time?:Date): Promise<UnitStatusOutput[]> {
    
    let unitPositions;
    if(date_time!==undefined){
      unitPositions=await this.unitStatusRepository.find({ where: { unit_id: unit_id ,date_time:date_time} });
    }
    else{
      unitPositions=await this.unitStatusRepository.find({ where: { unit_id: unit_id} });
    }
    return unitPositions;
  }

  async addUnitStatus(unitStatusInput: UnitStatusInput): Promise<String> {
    unitStatusInput['created']=new Date();
    let confirmationMessage:string;
    const recordExsists=await this.unitStatusRepository.findOne({unit_id:unitStatusInput.unit_id, date_time:unitStatusInput.date_time});
    if (recordExsists) {
      confirmationMessage="Record Already Exsists!";
    }else{
      const results=await this.unitStatusRepository.save(unitStatusInput)
      confirmationMessage="Created record unit_id: "+results.unit_id +" & date_time: "+results.date_time;
      
    }
    return confirmationMessage;
  }

  async updateUnitStatus(unitStatusInput: UnitStatusInput): Promise<String> {
    unitStatusInput['created']=new Date();
    let confirmationMessage:string;
    const recordExsists=await this.unitStatusRepository.findOne({unit_id:unitStatusInput.unit_id, date_time:unitStatusInput.date_time});
    if (!recordExsists) {
      confirmationMessage="Record does not Exsist!";
    }else{
      const results=await this.unitStatusRepository.save(unitStatusInput)
      confirmationMessage="Created record unit_id: "+results.unit_id +" & date_time: "+results.date_time;
      
    }
    return confirmationMessage;
  }

  async deleteUnitStatus(unit_id: number,date_time?:Date): Promise<Boolean> {
    let deletedStatus;
    if(date_time!==undefined){
      deletedStatus=await this.unitStatusRepository.delete({unit_id:unit_id,date_time:date_time});
    }else{
      deletedStatus=await this.unitStatusRepository.delete({unit_id:unit_id});
    }

    if(deletedStatus.affected>0){
      return true;
    }else{
      return false;
    }

  }
}