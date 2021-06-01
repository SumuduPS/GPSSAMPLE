import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitStatus } from './unit_status.entity';
import { UnitStatusService } from './unit_status.service';
import {UnitStatusResolver} from './unit_status.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UnitStatus])],
  providers: [UnitStatusService,UnitStatusResolver],
  controllers: [],
})
export class UnitStatusModule {}