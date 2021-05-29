import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {UnitPositionService} from './unit_position.service';

@Resolver('UnitPosition')
export class UnitPositionResolver {
  constructor(private readonly unitPositionService: UnitPositionService) {}


  @Query()
  async getUnitPosition() {
    // console.log('getUnitPosition')
    return this.unitPositionService.findAll();
  }

}