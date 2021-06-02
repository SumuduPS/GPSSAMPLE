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

  /**
   * retrieves unit power
   * @returns UnitPowerOutput list
   */
  async getUnitPower(): Promise<UnitPowerOutput[]> {
    return await this.unitPowerRepository.find();
  }

  /**
   * retrieves unit power by unit_id and date_time
   * @param unit_id 
   * @param date_time 
   * @returns UnitPowerOutput list
   */
  async getUnitPowerById(unit_id:number,date_time?:Date): Promise<UnitPowerOutput[]> {
    
    let unitPositions;
    if(date_time!==undefined){
      const date= new Date(date_time.toLocaleDateString() +" "+date_time.toLocaleTimeString() +" GMT")
      unitPositions=await this.unitPowerRepository.find({ where: { unit_id: unit_id ,date_time:date} });
    }
    else{
      unitPositions=await this.unitPowerRepository.find({ where: { unit_id: unit_id} });
    }
    return unitPositions;
  }

  /**
   * inserts unit power
   * @param unitPowerInput 
   * @returns success message
   */
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

  /**
   * updates unit power
   * @param unitPowerInput 
   * @returns success message
   */
  async updateUnitPower(unitPowerInput: UnitPowerInput): Promise<String> {
    unitPowerInput['created']=new Date();
    let confirmationMessage:string;
    const recordExsists=await this.unitPowerRepository.findOne({unit_id:unitPowerInput.unit_id, date_time:unitPowerInput.date_time});
    if (!recordExsists) {
      confirmationMessage="Record does not Exsist!";
    }else{
      const results=await this.unitPowerRepository.save(unitPowerInput)
      confirmationMessage="Updated record unit_id: "+results.unit_id +" & date_time: "+results.date_time;
      
    }
    return confirmationMessage;
  }

  /**
   * deletes unit power
   * @param unit_id 
   * @param date_time 
   * @returns success or not
   */
  async deleteUnitPower(unit_id: number,date_time?:Date): Promise<Boolean> {
    let deletedStatus;
    if(date_time!==undefined){
      const date= new Date(date_time.toLocaleDateString() +" "+date_time.toLocaleTimeString() +" GMT")
      deletedStatus=await this.unitPowerRepository.delete({unit_id:unit_id,date_time:date});
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