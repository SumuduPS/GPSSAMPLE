import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {UnitPowerService} from './unit_power.service';
import {UnitPowerInput} from '../graphql'; 

@Resolver('UnitPower')
export class UnitPowerResolver {
  constructor(private readonly unitPowerService: UnitPowerService) {}

  @Query()
  async getUnitPower() {
    return this.unitPowerService.getUnitPower();
  }

  @Query()
  async getUnitPowerById(
    @Args('unit_id') unit_id: number,
    @Args('date_time') date_time?: Date
    ){
    return this.unitPowerService.getUnitPowerById(unit_id,date_time);
  }


  @Mutation()
  async addUnitPower(
    @Args('unitPowerInput') unitPowerInput: UnitPowerInput
  ){
    return this.unitPowerService.addUnitPower(unitPowerInput);
  }

  @Mutation()
  async updateUnitPower(
    @Args('unitPowerInput') unitPowerInput: UnitPowerInput)
    {
      return this.unitPowerService.updateUnitPower(unitPowerInput);
  }

  @Mutation()
  async deleteUnitPower(
    @Args('unit_id') unit_id: number,
    @Args('date_time') date_time?: Date
  ){
    return this.unitPowerService.deleteUnitPower(unit_id,date_time);
  }

}