import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UnitPosition} from './unit_position/unit_position.entity';
import {UnitPositionModule} from './unit_position/unit_position.module';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { DateScalar } from './graphql/scalar/DateScalar';
import { ConfigModule } from '@nestjs/config';
import { UnitPowerModule } from './unit_power/unit_power.module';
import { UnitPower } from './unit_power/unit_power.entity';
import { UnitStatusModule } from './unit_status/unit_status.module';
import { UnitStatus } from './unit_status/unit_status.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      }
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [UnitPosition,UnitPower,UnitStatus],
      synchronize: true,
    }),
    UnitPositionModule,
    UnitPowerModule,
    UnitStatusModule
  ],
  controllers: [],
  providers: [AppService,DateScalar],
})
export class AppModule {}
