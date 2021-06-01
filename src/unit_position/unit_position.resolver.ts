import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {UnitPositionService} from './unit_position.service';
import {UnitPositionInput} from '../graphql'; 

@Resolver('UnitPosition')
export class UnitPositionResolver {
  constructor(private readonly unitPositionService: UnitPositionService) {}


  @Query()
  async getUnitPosition() {
    return this.unitPositionService.getUnitPosition();
  }

  @Mutation()
  async addUnitPosition(
    @Args('unitPositionInput') unitPositionInput: UnitPositionInput
  ){
    return this.unitPositionService.addUnitPosition(unitPositionInput);
  }
  
}