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

  @Mutation()
  async addUnitStatus(
    @Args('unitStatusInput') unitStatusInput: UnitStatusInput
  ){
    return this.unitStatusService.addUnitStatus(unitStatusInput);
  }
  
}