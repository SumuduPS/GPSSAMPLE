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

  addUnitStatus(unitStatusInput: UnitStatusInput): Promise<UnitStatusOutput> {
    return this.unitStatusRepository.save(unitStatusInput);
  }
}