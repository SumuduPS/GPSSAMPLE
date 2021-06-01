import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitPower } from './unit_power.entity';
import { UnitPowerService } from './unit_power.service';
import {UnitPowerResolver} from './unit_power.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UnitPower])],
  providers: [UnitPowerService,UnitPowerResolver],
  controllers: [],
})
export class UnitPowerModule {}