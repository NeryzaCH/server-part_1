import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VinylEntity } from './vinyl.entity';
import { VinylsController } from './vinyls.controller';
import { VinylsService } from './vinyls.service';

@Module({
  providers: [VinylsService],
  controllers:[
    VinylsController
  ],
  imports:[
    TypeOrmModule.forFeature(
      [
        VinylEntity
      ]
      )
  ]
})
export class VinylsModule {}
