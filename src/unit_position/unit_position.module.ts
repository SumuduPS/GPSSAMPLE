import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitPosition } from './unit_position.entity';
import { UnitPositionService } from './unit_position.service';
import {UnitPositionResolver} from './unit_position.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UnitPosition])],
  providers: [UnitPositionService,UnitPositionResolver],
  controllers: [],
})
export class PostsModule {}