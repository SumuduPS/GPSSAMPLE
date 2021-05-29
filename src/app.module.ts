import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UnitPosition} from './unit_position/unit_position.entity';
import {PostsModule} from './unit_position/unit_position.module';
import { join } from 'path';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { DateScalar } from './graphql/scalar/DateScalar';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      }
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'GPSSample',
      entities: [UnitPosition],
      synchronize: true,
    }),
    PostsModule
  ],
  controllers: [AppController],
  providers: [AppService,DateScalar],
})
export class AppModule {}
