import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DiscsModule } from './discs/discs.module';
import { VinylsModule } from './vinyls/vinyls.module';
import { ConcertsModule } from './concerts/concerts.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath:join(__dirname,'..','avatars')
    }),
    DiscsModule,
    VinylsModule,
    ConcertsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
