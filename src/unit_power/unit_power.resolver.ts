import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {UnitPowerService} from './unit_power.service';
import {UnitPositionInput} from '../graphql'; 

@Resolver('UnitPower')
export class UnitPowerResolver {
  constructor(private readonly unitPowerService: UnitPowerService) {}

  @Query()
  async getUnitPower() {
    return this.unitPowerService.getUnitPower();
  }

  @Mutation()
  async addUnitPower(
    @Args('unitPowerInput') unitPowerInput: UnitPositionInput
  ){
    return this.unitPowerService.addUnitPower(unitPowerInput);
  }
  
}