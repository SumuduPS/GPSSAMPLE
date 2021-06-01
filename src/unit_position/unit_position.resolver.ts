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

  @Query()
  async getUnitPositionById(
    @Args('unit_id') unit_id: number,
    @Args('date_time') date_time?: Date
    ){
    return this.unitPositionService.getUnitPositionById(unit_id,date_time);
  }


  @Mutation()
  async addUnitPosition(
    @Args('unitPositionInput') unitPositionInput: UnitPositionInput
  ){
    return this.unitPositionService.addUnitPosition(unitPositionInput);
  }

  @Mutation()
  async updateUnitPosition(
    @Args('unitPositionInput') unitPositionInput: UnitPositionInput)
    {
      return this.unitPositionService.updateUnitPosition(unitPositionInput);
  }

  @Mutation()
  async deleteUnitPosition(
    @Args('unit_id') unit_id: number,
    @Args('date_time') date_time?: Date
  ){
    return this.unitPositionService.deleteUnitPosition(unit_id,date_time);
  }
}