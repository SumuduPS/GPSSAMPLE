import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {UnitMapService} from './unit_map.service';
import {UnitMapInput, Upload} from '../graphql'; 

@Resolver('UnitPosition')
export class UnitMapResolver {
  constructor(private readonly unitMapService: UnitMapService) {}


  @Query()
  async getUnitMap() {
    return this.unitMapService.getUnitMap();
  }

  @Mutation()
  addUnitMap(
    @Args('unitMapInput') unitMapInput: UnitMapInput
  ){
    return this.unitMapService.addUnitMap(unitMapInput);
  }
}