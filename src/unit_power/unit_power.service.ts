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
    return this.unitPowerRepository.find();
  }

  addUnitPower(unitPowerInput: UnitPowerInput): Promise<UnitPowerOutput> {
    return this.unitPowerRepository.save(unitPowerInput);
  }
}