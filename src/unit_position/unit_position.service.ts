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

  async findAll(): Promise<UnitPositionOutput[]> {
    return this.unitPositionRepository.find();
  }

  create(unitPositionInput: UnitPositionInput): Promise<UnitPositionOutput> {
    return this.unitPositionRepository.save(unitPositionInput);
  }

  // async remove(id: string): Promise<Boolean> {
  //   const deletedStatus=await this.unitPositionRepository.delete(id);
  //   if(deletedStatus.affected>0){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
}