import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UnitPosition} from './unit_position/unit_position.entity';
import {UnitPositionModule} from './unit_position/unit_position.module';
import { join } from 'path';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { DateScalar } from './graphql/scalar/DateScalar';
import { ConfigModule } from '@nestjs/config';
import { UnitPowerModule } from './unit_power/unit_power.module';
import { UnitPower } from './unit_power/unit_power.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLFederationModule.forRoot({
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
      entities: [UnitPosition,UnitPower],
      synchronize: true,
    }),
    UnitPositionModule,
    UnitPowerModule
  ],
  controllers: [AppController],
  providers: [AppService,DateScalar],
})
export class AppModule {}
