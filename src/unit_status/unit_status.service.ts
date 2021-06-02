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

  /**
   * retrieves unit status
   * @returns UnitStatusOutput list
   */
  async getUnitStatus(): Promise<UnitStatusOutput[]> {
    return await this.unitStatusRepository.find();
  }

  /**
   * retrieves unit status by unit_id and date_time
   * @param unit_id 
   * @param date_time 
   * @returns UnitStatusOutput list
   */
  async getUnitStatusById(unit_id:number,date_time?:Date): Promise<UnitStatusOutput[]> {
    
    let unitPositions;
    if(date_time!==undefined){
      const date= new Date(date_time.toLocaleDateString() +" "+date_time.toLocaleTimeString() +" GMT")
      unitPositions=await this.unitStatusRepository.find({ where: { unit_id: unit_id ,date_time:date} });
    }
    else{
      unitPositions=await this.unitStatusRepository.find({ where: { unit_id: unit_id} });
    }
    return unitPositions;
  }

  /**
   * inserts unit status
   * @param unitStatusInput 
   * @returns success message
   */
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

  /**
   * updates unit status
   * @param unitStatusInput 
   * @returns success message
   */
  async updateUnitStatus(unitStatusInput: UnitStatusInput): Promise<String> {
    unitStatusInput['created']=new Date();
    let confirmationMessage:string;
    const recordExsists=await this.unitStatusRepository.findOne({unit_id:unitStatusInput.unit_id, date_time:unitStatusInput.date_time});
    if (!recordExsists) {
      confirmationMessage="Record does not Exsist!";
    }else{
      const results=await this.unitStatusRepository.save(unitStatusInput)
      confirmationMessage="Updated record unit_id: "+results.unit_id +" & date_time: "+results.date_time;
      
    }
    return confirmationMessage;
  }

  /**
   * deletes unit status
   * @param unit_id 
   * @param date_time 
   * @returns success or not
   */
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