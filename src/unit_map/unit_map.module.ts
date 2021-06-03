import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitMap } from './unit_map.entity';
import { UnitMapService } from './unit_map.service';
import {UnitMapResolver} from './unit_map.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UnitMap])],
  providers: [UnitMapService,UnitMapResolver],
  controllers: [],
})
export class UnitMapModule {}