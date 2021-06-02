import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {UnitStatusService} from './unit_status.service';
import {UnitStatusInput} from '../graphql'; 

@Resolver('UnitStatus')
export class UnitStatusResolver {
  constructor(private readonly unitStatusService: UnitStatusService) {}

  @Query()
  async getUnitStatus() {
    return this.unitStatusService.getUnitStatus();
  }

  @Query()
  async getUnitStatusById(
    @Args('unit_id') unit_id: number,
    @Args('date_time') date_time?: Date
    ){
    return this.unitStatusService.getUnitStatusById(unit_id,date_time);
  }


  @Mutation()
  async addUnitStatus(
    @Args('unitStatusInput') unitStatusInput: UnitStatusInput
  ){
    return this.unitStatusService.addUnitStatus(unitStatusInput);
  }

  @Mutation()
  async updateUnitStatus(
    @Args('unitStatusInput') unitStatusInput: UnitStatusInput)
    {
      return this.unitStatusService.updateUnitStatus(unitStatusInput);
  }

  @Mutation()
  async deleteUnitStatus(
    @Args('unit_id') unit_id: number,
    @Args('date_time') date_time?: Date
  ){
    return this.unitStatusService.deleteUnitStatus(unit_id,date_time);
  }
  
}