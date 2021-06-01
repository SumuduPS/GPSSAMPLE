import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UnitPosition } from './unit_position.entity';
import {UnitPositionOutput} from '../graphql';
import {UnitPositionInput} from '../graphql'; 

@Injectable()
export class UnitPositionService {
  constructor(
    @InjectRepository(UnitPosition)
    private readonly unitPositionRepository: Repository<UnitPosition>,
  ) {}

  
  async getUnitPosition(): Promise<UnitPositionOutput[]> {
    return await this.unitPositionRepository.find();
  }

  async getUnitPositionById(unit_id:number,date_time?:Date): Promise<UnitPositionOutput[]> {
    
    let unitPositions;
    if(date_time!==undefined){
      unitPositions=await this.unitPositionRepository.find({ where: { unit_id: unit_id ,date_time:date_time} });
    }
    else{
      unitPositions=await this.unitPositionRepository.find({ where: { unit_id: unit_id} });
    }
    return unitPositions;
  }

  async addUnitPosition(unitPositionInput: UnitPositionInput): Promise<String> {
    unitPositionInput['created']=new Date();
    let confirmationMessage:string;
    const recordExsists=await this.unitPositionRepository.findOne({unit_id:unitPositionInput.unit_id, date_time:unitPositionInput.date_time});
    if (recordExsists) {
      confirmationMessage="Record Already Exsists!";
    }else{
      const results=await this.unitPositionRepository.save(unitPositionInput)
      confirmationMessage="Created record unit_id: "+results.unit_id +" & date_time: "+results.date_time;
      
    }
    return confirmationMessage;
  }

  async updateUnitPosition(unitPositionInput: UnitPositionInput): Promise<String> {
    unitPositionInput['created']=new Date();
    let confirmationMessage:string;
    const recordExsists=await this.unitPositionRepository.findOne({unit_id:unitPositionInput.unit_id, date_time:unitPositionInput.date_time});
    if (!recordExsists) {
      confirmationMessage="Record does not Exsist!";
    }else{
      const results=await this.unitPositionRepository.save(unitPositionInput)
      confirmationMessage="Created record unit_id: "+results.unit_id +" & date_time: "+results.date_time;
      
    }
    return confirmationMessage;
  }

  async deleteUnitPosition(unit_id: number,date_time?:Date): Promise<Boolean> {
    let deletedStatus;
    if(date_time!==undefined){
      deletedStatus=await this.unitPositionRepository.delete({unit_id:unit_id,date_time:date_time});
    }else{
      deletedStatus=await this.unitPositionRepository.delete({unit_id:unit_id});
    }

    if(deletedStatus.affected>0){
      return true;
    }else{
      return false;
    }

  }
}