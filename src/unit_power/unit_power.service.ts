import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UnitPower } from './unit_power.entity';
import {UnitPowerOutput} from '../graphql';
import {UnitPowerInput} from '../graphql'; 

@Injectable()
export class UnitPowerService {
  constructor(
    @InjectRepository(UnitPower)
    private readonly unitPowerRepository: Repository<UnitPower>,
  ) {}

  async getUnitPower(): Promise<UnitPowerOutput[]> {
    return await this.unitPowerRepository.find();
  }

  async getUnitPowerById(unit_id:number,date_time?:Date): Promise<UnitPowerOutput[]> {
    
    let unitPositions;
    if(date_time!==undefined){
      unitPositions=await this.unitPowerRepository.find({ where: { unit_id: unit_id ,date_time:date_time} });
    }
    else{
      unitPositions=await this.unitPowerRepository.find({ where: { unit_id: unit_id} });
    }
    return unitPositions;
  }

  async addUnitPower(unitPowerInput: UnitPowerInput): Promise<String> {
    unitPowerInput['created']=new Date();
    let confirmationMessage:string;
    const recordExsists=await this.unitPowerRepository.findOne({unit_id:unitPowerInput.unit_id, date_time:unitPowerInput.date_time});
    if (recordExsists) {
      confirmationMessage="Record Already Exsists!";
    }else{
      const results=await this.unitPowerRepository.save(unitPowerInput)
      confirmationMessage="Created record unit_id: "+results.unit_id +" & date_time: "+results.date_time;
      
    }
    return confirmationMessage;
  }

  async updateUnitPower(unitPowerInput: UnitPowerInput): Promise<String> {
    unitPowerInput['created']=new Date();
    let confirmationMessage:string;
    const recordExsists=await this.unitPowerRepository.findOne({unit_id:unitPowerInput.unit_id, date_time:unitPowerInput.date_time});
    if (!recordExsists) {
      confirmationMessage="Record does not Exsist!";
    }else{
      const results=await this.unitPowerRepository.save(unitPowerInput)
      confirmationMessage="Created record unit_id: "+results.unit_id +" & date_time: "+results.date_time;
      
    }
    return confirmationMessage;
  }

  async deleteUnitPower(unit_id: number,date_time?:Date): Promise<Boolean> {
    let deletedStatus;
    if(date_time!==undefined){
      deletedStatus=await this.unitPowerRepository.delete({unit_id:unit_id,date_time:date_time});
    }else{
      deletedStatus=await this.unitPowerRepository.delete({unit_id:unit_id});
    }

    if(deletedStatus.affected>0){
      return true;
    }else{
      return false;
    }

  }
}