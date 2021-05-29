import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UnitPosition } from './unit_position.entity';
import {UnitPositionOutput} from '../graphql';
// import {PostInput} from '../graphql'; 

@Injectable()
export class UnitPositionService {
  constructor(
    @InjectRepository(UnitPosition)
    private readonly unitPositionRepository: Repository<UnitPosition>,
  ) {}

  async findAll(): Promise<UnitPositionOutput[]> {
    return this.unitPositionRepository.find();
  }
}